// backend/routes/settings.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- 1. Get All Settings (Personal & System) ---
// GET /api/settings
router.get("/", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const userRole = req.user.role;

    // Get Personal Settings
    // We use an "UPSERT" here to create a profile if one doesn't exist
    const profileQuery = `
      INSERT INTO user_profiles (user_id, first_name, last_name, phone_number, sex)
      SELECT $1, '', '', '', 'other'
      WHERE NOT EXISTS (SELECT 1 FROM user_profiles WHERE user_id = $1)
      RETURNING *;
    `;
    await db.query(profileQuery, [userId]); // Ensure profile exists

    const personalRes = await db.query(
      "SELECT date_format, notification_prefs FROM user_profiles WHERE user_id = $1",
      [userId],
    );
    const personal = personalRes.rows[0];

    let system = null;
    if (userRole === "admin") {
      // Get System Settings
      const systemRes = await db.query("SELECT * FROM system_settings");
      // Convert array of {key, value} to a single object {key: value}
      system = systemRes.rows.reduce((acc, setting) => {
        acc[setting.setting_key] = setting.setting_value;
        return acc;
      }, {});
    }

    res.json({ personal, system });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// --- 2. Update Personal Settings ---
// PUT /api/settings/personal
router.put("/personal", authenticateToken, async (req, res) => {
  try {
    const { date_format, notification_prefs } = req.body;
    const userId = req.user.id;

    const { rows } = await db.query(
      `UPDATE user_profiles 
       SET date_format = $1, notification_prefs = $2
       WHERE user_id = $3
       RETURNING date_format, notification_prefs`,
      [date_format, notification_prefs, userId],
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// --- 3. Update System Settings (Admin Only) ---
// PUT /api/settings/system
router.put(
  "/system",
  [authenticateToken, checkRole(["admin"])],
  async (req, res) => {
    try {
      const { company_name, currency_symbol } = req.body;

      // Use "UPSERT" (INSERT ... ON CONFLICT ...) to create or update
      const query = `
      INSERT INTO system_settings (setting_key, setting_value)
      VALUES 
        ('company_name', $1),
        ('currency_symbol', $2)
      ON CONFLICT (setting_key) DO UPDATE
      SET setting_value = EXCLUDED.setting_value
      RETURNING *;
    `;

      await db.query(query, [company_name, currency_symbol]);
      res.json({ message: "System settings updated" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

// --- 4. Change Password ---
// PUT /api/settings/change-password
router.put("/change-password", authenticateToken, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!oldPassword || !newPassword || newPassword.length < 6) {
      return res.status(400).json({
        message:
          "All fields are required and new password must be at least 6 characters.",
      });
    }

    // 1. Get the user's current password
    const userRes = await db.query(
      "SELECT password_hash FROM users WHERE user_id = $1",
      [userId],
    );
    if (userRes.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Check if old password is correct
    const validPassword = await bcrypt.compare(
      oldPassword,
      userRes.rows[0].password_hash,
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // 3. Hash and save new password
    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    await db.query("UPDATE users SET password_hash = $1 WHERE user_id = $2", [
      newPasswordHash,
      userId,
    ]);

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
