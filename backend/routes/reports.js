// routes/reports.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- Staff Route: Submit a New Report ---
// POST /api/reports/
router.post(
  "/",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.user.id;

      // Validation
      if (!title || !content) {
        return res
          .status(400)
          .json({ message: "Title and content are required" });
      }

      // Insert new report into the database
      const newReport = await db.query(
        `INSERT INTO reports (user_id, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
        [userId, title, content],
      );

      res.status(201).json({
        message: "Report submitted successfully",
        report: newReport.rows[0],
      });
    } catch (err) {
      console.error("Submit Report Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: View All Submitted Reports ---
// GET /api/reports/
router.get(
  "/",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      // We JOIN with the users table to get the username
      const allReports = await db.query(
        `SELECT 
         r.*, 
         u.username 
       FROM reports r
       LEFT JOIN users u ON r.user_id = u.user_id
       ORDER BY r.submitted_at DESC`,
      );

      res.json(allReports.rows);
    } catch (err) {
      console.error("Get All Reports Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

module.exports = router;
