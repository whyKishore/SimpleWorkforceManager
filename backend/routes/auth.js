const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db");
const { sendPasswordResetEmail } = require("../utils/mailer");
const { authenticateToken } = require("../middleware/auth");
const { JWT_EXPIRY, PASSWORD_RESET_EXPIRY_MINUTES, MIN_PASSWORD_LENGTH } = require("../constants");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const foundUser = user.rows[0];
    const validPassword = await bcrypt.compare(password, foundUser.password_hash);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: foundUser.user_id,
        role: foundUser.role,
        is_default_password: foundUser.is_default_password,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRY });

    res.json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Server error during login" });
  }
});

// POST /api/auth/reset-password
router.post("/reset-password", authenticateToken, async (req, res) => {
  try {
    const { newPassword } = req.body;
    const userId = req.user.id;

    if (!newPassword || newPassword.length < MIN_PASSWORD_LENGTH) {
      return res.status(400).json({ message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long` });
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(newPassword, salt);

    await db.query(
      "UPDATE users SET password_hash = $1, is_default_password = false WHERE user_id = $2",
      [password_hash, userId]
    );

    res.status(200).json({ message: "Password reset successful. Please log in again." });
  } catch (err) {
    console.error("Reset Password Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/auth/forgot-password
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (rows.length === 0) {
      return res.status(200).json({
        message: "If an account with that email exists, a reset link has been sent.",
      });
    }
    
    const user = rows[0];
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + PASSWORD_RESET_EXPIRY_MINUTES * 60 * 1000);

    await db.query(
      "UPDATE users SET password_reset_token = $1, password_reset_expires = $2 WHERE user_id = $3",
      [token, expires, user.user_id]
    );

    await sendPasswordResetEmail(user.email, token);

    res.json({
      message: "If an account with that email exists, a reset link has been sent.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/auth/perform-reset
router.post("/perform-reset", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required." });
    }

    const { rows } = await db.query(
      "SELECT * FROM users WHERE password_reset_token = $1 AND password_reset_expires > NOW()",
      [token]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }
    
    const user = rows[0];
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(newPassword, salt);

    await db.query(
      "UPDATE users SET password_hash = $1, password_reset_token = NULL, password_reset_expires = NULL, is_default_password = false WHERE user_id = $2",
      [password_hash, user.user_id]
    );

    res.json({ message: "Password reset successful. You can now log in." });
  } catch (err) {
    console.error("Perform Reset Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
