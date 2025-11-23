// routes/allowances.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- Admin/Manager Route: Create a New Allowance ---
// POST /api/allowances/
router.post(
  "/",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const { user_id, title, description, amount, frequency } = req.body;

      if (!user_id || !title || !amount) {
        return res
          .status(400)
          .json({ message: "User ID, title, and amount are required" });
      }

      const newAllowance = await db.query(
        `INSERT INTO allowances (user_id, title, description, amount, frequency)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
        [user_id, title, description, amount, frequency],
      );

      res.status(201).json(newAllowance.rows[0]);
    } catch (err) {
      console.error("Create Allowance Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Staff Route: View My Allowances ---
// GET /api/allowances/my-allowances
router.get(
  "/my-allowances",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const userId = req.user.id;

      const myAllowances = await db.query(
        `SELECT * FROM allowances WHERE user_id = $1
       ORDER BY created_at DESC`,
        [userId],
      );

      res.json(myAllowances.rows);
    } catch (err) {
      console.error("Get My Allowances Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: View All Allowances ---
// GET /api/allowances/all
router.get(
  "/all",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const allAllowances = await db.query(
        `SELECT a.*, u.username 
       FROM allowances a
       JOIN users u ON a.user_id = u.user_id
       ORDER BY a.created_at DESC`,
      );

      res.json(allAllowances.rows);
    } catch (err) {
      console.error("Get All Allowances Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: Update an Allowance ---
// PUT /api/allowances/:id
router.put(
  "/:id",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const allowanceId = req.params.id;
      const { user_id, title, description, amount, frequency } = req.body;

      if (!user_id || !title || !amount) {
        return res
          .status(400)
          .json({ message: "User ID, title, and amount are required" });
      }

      const updatedAllowance = await db.query(
        `UPDATE allowances 
       SET user_id = $1, title = $2, description = $3, amount = $4, frequency = $5
       WHERE allowance_id = $6
       RETURNING *`,
        [user_id, title, description, amount, frequency, allowanceId],
      );

      if (updatedAllowance.rows.length === 0) {
        return res.status(404).json({ message: "Allowance not found" });
      }

      res.json(updatedAllowance.rows[0]);
    } catch (err) {
      console.error("Update Allowance Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: Delete an Allowance ---
// DELETE /api/allowances/:id
router.delete(
  "/:id",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const allowanceId = req.params.id;

      const deleteOp = await db.query(
        `DELETE FROM allowances WHERE allowance_id = $1 RETURNING title`,
        [allowanceId],
      );

      if (deleteOp.rows.length === 0) {
        return res.status(404).json({ message: "Allowance not found" });
      }

      res.json({
        message: `Allowance "${deleteOp.rows[0].title}" deleted successfully`,
      });
    } catch (err) {
      console.error("Delete Allowance Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

module.exports = router;
