// backend/routes/profile.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken } = require("../middleware/auth");

router.get("/me", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const profileQuery = `
      SELECT 
        u.user_id, u.username, u.email, u.role,
        u.is_default_password,
        p.first_name, p.last_name, p.phone_number, 
        p.job_title, p.hire_date, p.address,
        p.sex,
        p.date_format -- <-- THIS LINE IS NEW
      FROM users u
      LEFT JOIN user_profiles p ON u.user_id = p.user_id
      WHERE u.user_id = $1
    `;

    const { rows } = await db.query(profileQuery, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// PUT /api/profile/me
router.put("/me", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      username,
      email,
      first_name,
      last_name,
      phone_number,
      job_title,
      hire_date,
      address,
      sex,
    } = req.body;

    const client = await db.pool.connect();

    try {
      await client.query("BEGIN");

      // Update users table (username and email)
      if (username !== undefined || email !== undefined) {
        // Build dynamic query to only update provided fields
        const updates = [];
        const values = [];
        let paramCount = 1;

        if (username !== undefined) {
          updates.push(`username = $${paramCount++}`);
          values.push(username);
        }
        if (email !== undefined) {
          updates.push(`email = $${paramCount++}`);
          values.push(email);
        }

        if (updates.length > 0) {
          values.push(userId);
          const updateUserQuery = `
            UPDATE users 
            SET ${updates.join(", ")}
            WHERE user_id = $${paramCount}
            RETURNING *
          `;
          await client.query(updateUserQuery, values);
        }
      }

      // Update user_profiles table
      const finalHireDate = hire_date ? hire_date : null;

      const upsertQuery = `
        INSERT INTO user_profiles (
          user_id, first_name, last_name, phone_number, 
          job_title, hire_date, address, sex
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (user_id) 
        DO UPDATE SET
          first_name = EXCLUDED.first_name,
          last_name = EXCLUDED.last_name,
          phone_number = EXCLUDED.phone_number,
          job_title = EXCLUDED.job_title,
          hire_date = EXCLUDED.hire_date,
          address = EXCLUDED.address,
          sex = EXCLUDED.sex
        RETURNING *
      `;

      const { rows } = await client.query(upsertQuery, [
        userId,
        first_name,
        last_name,
        phone_number,
        job_title,
        finalHireDate,
        address,
        sex,
      ]);

      await client.query("COMMIT");
      res.json(rows[0]);
    } catch (err) {
      await client.query("ROLLBACK");
      
      // Handle unique constraint violations
      if (err.code === "23505") {
        if (err.constraint === "users_username_key") {
          return res.status(409).json({ message: "Username already taken" });
        }
        if (err.constraint === "users_email_key") {
          return res.status(409).json({ message: "Email already taken" });
        }
        if (err.constraint === "user_profiles_phone_number_key") {
          return res.status(409).json({ message: "Phone number already taken" });
        }
      }
      throw err;
    } finally {
      client.release();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
