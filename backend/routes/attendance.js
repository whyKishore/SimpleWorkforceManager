// routes/attendance.js (Refactored)

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- (MIDDLEWARE REMOVED FROM HERE) ---

// --- Staff Route: Clock-In ---
// POST /api/attendance/clock-in
router.post(
  "/clock-in",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const userId = req.user.id;
      // Check if user is already clocked in today
      const check = await db.query(
        `SELECT * FROM attendance
       WHERE user_id = $1 AND attendance_date = CURRENT_DATE AND clock_out_time IS NULL`,
        [userId],
      );

      if (check.rows.length > 0) {
        return res.status(409).json({ message: "You are already clocked in" });
      }

      // Create new clock-in record
      const newClockIn = await db.query(
        `INSERT INTO attendance (user_id) 
       VALUES ($1) 
       RETURNING *`,
        [userId],
      );

      res.status(201).json({
        message: "Clocked in successfully",
        attendance: newClockIn.rows[0],
      });
    } catch (err) {
      console.error("Clock-In Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Staff Route: Clock-Out ---
// POST /api/attendance/clock-out
router.post(
  "/clock-out",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const userId = req.user.id;
      // Find the user's "open" clock-in record for today
      const check = await db.query(
        `SELECT * FROM attendance
       WHERE user_id = $1 AND attendance_date = CURRENT_DATE AND clock_out_time IS NULL`,
        [userId],
      );

      if (check.rows.length === 0) {
        return res.status(400).json({ message: "You are not clocked in" });
      }

      const attendanceId = check.rows[0].attendance_id;

      // Update the record with the clock-out time
      const updatedClockOut = await db.query(
        `UPDATE attendance
       SET clock_out_time = CURRENT_TIMESTAMP
       WHERE attendance_id = $1
       RETURNING *`,
        [attendanceId],
      );

      res.status(200).json({
        message: "Clocked out successfully",
        attendance: updatedClockOut.rows[0],
      });
    } catch (err) {
      console.error("Clock-Out Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- NEW: Admin/Manager Route: View All Attendance ---
// GET /api/attendance/all
router.get(
  "/all",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      // We JOIN with the users table to get the username for each record
      const allAttendance = await db.query(
        `SELECT 
         a.*, 
         u.username 
       FROM attendance a
       LEFT JOIN users u ON a.user_id = u.user_id
       ORDER BY a.attendance_date DESC, a.clock_in_time DESC`,
      );

      res.json(allAttendance.rows);
    } catch (err) {
      console.error("Get All Attendance Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- NEW: Staff Route: Get Current Clock-In Status ---
// GET /api/attendance/status
router.get(
  "/status",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const userId = req.user.id;

      // Find an "open" clock-in record for today
      const check = await db.query(
        `SELECT * FROM attendance
       WHERE user_id = $1 AND attendance_date = CURRENT_DATE AND clock_out_time IS NULL`,
        [userId],
      );

      if (check.rows.length > 0) {
        // User is currently clocked in
        res.json({
          isClockedIn: true,
          record: check.rows[0],
        });
      } else {
        // User is not clocked in
        res.json({
          isClockedIn: false,
        });
      }
    } catch (err) {
      console.error("Get Attendance Status Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

module.exports = router;
