// backend/routes/staff.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const { authenticateToken, checkRole } = require("../middleware/auth");

router.use(authenticateToken);

// 1. CREATE: (POST /api/staff)
// (UPDATED)
router.post("/", checkRole(["admin"]), async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    first_name,
    last_name,
    phone_number,
    sex,
    job_title, // <-- 1. ADDED 'job_title' HERE
  } = req.body;

  // --- Validation ---
  if (
    !username ||
    !email ||
    !password ||
    !role ||
    !first_name ||
    !last_name ||
    !phone_number ||
    !sex
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const client = await db.pool.connect();
  try {
    // --- Start Transaction ---
    await client.query("BEGIN");

    // 1. Create User
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const userQuery = `
      INSERT INTO users (username, email, password_hash, role, is_default_password)
      VALUES ($1, $2, $3, $4, true)
      RETURNING user_id
    `;
    const userRes = await client.query(userQuery, [
      username,
      email,
      password_hash,
      role,
    ]);
    const newUserId = userRes.rows[0].user_id;

    // 2. Create Profile
    const profileQuery = `
      INSERT INTO user_profiles (user_id, first_name, last_name, phone_number, sex, job_title)
      VALUES ($1, $2, $3, $4, $5, $6)
    `; // <-- 2. ADDED 'job_title' TO THE QUERY
    await client.query(profileQuery, [
      newUserId,
      first_name,
      last_name,
      phone_number,
      sex,
      job_title || null, // <-- 3. ADDED 'job_title' TO THE PARAMETERS
    ]);

    // --- Commit Transaction ---
    await client.query("COMMIT");

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    // --- Rollback Transaction ---
    await client.query("ROLLBACK");
    console.error("Create Staff Error:", err.message);
    if (err.code === "23505") {
      return res
        .status(409)
        .json({ message: `Failed to create user. ${err.detail}` });
    }
    res.status(500).json({ message: "Server error creating user" });
  } finally {
    client.release();
  }
});

// 2. READ ALL: (GET /api/staff)
// (UPDATED) Now JOINs with user_profiles
router.get("/", checkRole(["admin", "manager"]), async (req, res) => {
  try {
    const query = `
      SELECT 
        u.user_id, u.username, u.email, u.role,
        p.first_name, p.last_name, p.phone_number, p.sex, p.job_title
      FROM users u
      LEFT JOIN user_profiles p ON u.user_id = p.user_id
      WHERE u.role != 'admin'
    `;
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error("Get All Staff Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// 3. READ ONE: (GET /api/staff/:id)
// (UPDATED) Now JOINs with user_profiles
router.get("/:id", checkRole(["admin", "manager"]), async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
      SELECT 
        u.user_id, u.username, u.email, u.role,
        p.first_name, p.last_name, p.phone_number, p.sex, p.job_title, p.hire_date, p.address
      FROM users u
      LEFT JOIN user_profiles p ON u.user_id = p.user_id
      WHERE u.user_id = $1 AND u.role != 'admin'
    `;
    const { rows } = await db.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Staff user not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Get One Staff Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// 4. UPDATE: (PUT /api/staff/:id)
// (UPDATED) Now a transaction to update BOTH tables
router.put("/:id", checkRole(["admin"]), async (req, res) => {
  const { id } = req.params;
  const {
    username,
    email,
    role,
    first_name,
    last_name,
    phone_number,
    sex,
    job_title,
  } = req.body;

  // Validation
  if (
    !username ||
    !email ||
    !role ||
    !first_name ||
    !last_name ||
    !phone_number ||
    !sex
  ) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided" });
  }

  const client = await db.pool.connect();
  try {
    // --- Start Transaction ---
    await client.query("BEGIN");

    // 1. Update users table
    const userQuery = `
      UPDATE users SET username = $1, email = $2, role = $3
      WHERE user_id = $4 AND role != 'admin'
    `;
    await client.query(userQuery, [username, email, role, id]);

    // 2. Update user_profiles table (using UPSERT in case one wasn't created)
    const profileQuery = `
      INSERT INTO user_profiles (user_id, first_name, last_name, phone_number, sex, job_title)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (user_id) 
      DO UPDATE SET
        first_name = EXCLUDED.first_name,
        last_name = EXCLUDED.last_name,
        phone_number = EXCLUDED.phone_number,
        sex = EXCLUDED.sex,
        job_title = EXCLUDED.job_title
    `;
    await client.query(profileQuery, [
      id,
      first_name,
      last_name,
      phone_number,
      sex,
      job_title || null,
    ]);

    // --- Commit Transaction ---
    await client.query("COMMIT");
    res.json({ message: "User updated successfully" });
  } catch (err) {
    // --- Rollback Transaction ---
    await client.query("ROLLBACK");
    console.error("Update Staff Error:", err.message);
    if (err.code === "23505") {
      // Unique constraint violation
      return res
        .status(409)
        .json({ message: `Failed to update user. ${err.detail}` });
    }
    res.status(500).json({ message: "Server error" });
  } finally {
    client.release();
  }
});

// 5. DELETE: (DELETE /api/staff/:id)
// (No change needed, CASCADE in database handles it)
router.delete("/:id", checkRole(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOp = await db.query(
      "DELETE FROM users WHERE user_id = $1 AND role != 'admin' RETURNING user_id, username",
      [id],
    );

    if (deleteOp.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Staff user not found or is an admin" });
    }
    res.json({
      message: `User ${deleteOp.rows[0].username} deleted successfully`,
    });
  } catch (err) {
    console.error("Delete Staff Error:", err.message);
    if (err.code === "23503") {
      return res.status(409).json({
        message: "Cannot delete user. They are referenced in other records.",
      });
    }
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
