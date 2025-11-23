// routes/feedback.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- Staff Route: Submit New Feedback ---
// POST /api/feedback/
router.post(
  "/",
  [authenticateToken, checkRole(["staff"])],
  async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.user.id;

      if (!title || !content) {
        return res
          .status(400)
          .json({ message: "Title and content are required" });
      }

      const newFeedback = await db.query(
        `INSERT INTO feedback (user_id, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
        [userId, title, content],
      );

      res.status(201).json(newFeedback.rows[0]);
    } catch (err) {
      console.error("Submit Feedback Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Staff Route: View My Submitted Feedback ---
// GET /api/feedback/my-feedback
router.get("/my-feedback", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const myFeedback = await db.query(
      `SELECT 
         f.*, 
         u.username AS replied_by_username
       FROM feedback f
       LEFT JOIN users u ON f.replied_by = u.user_id
       WHERE f.user_id = $1
       ORDER BY f.submitted_at DESC`,
      [userId],
    );

    res.json(myFeedback.rows);
  } catch (err) {
    console.error("Get My Feedback Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// --- Admin/Manager Route: View All Feedback ---
// GET /api/feedback/all
router.get(
  "/all",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const allFeedback = await db.query(
        `SELECT 
         f.*, 
         submitter.username AS submitted_by_username,
         replier.username AS replied_by_username
       FROM feedback f
       LEFT JOIN users submitter ON f.user_id = submitter.user_id
       LEFT JOIN users replier ON f.replied_by = replier.user_id
       ORDER BY f.submitted_at DESC`,
      );

      res.json(allFeedback.rows);
    } catch (err) {
      console.error("Get All Feedback Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: Reply to Feedback ---
// PUT /api/feedback/:id/reply
router.put(
  "/:id/reply",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const feedbackId = req.params.id;
      const replierUserId = req.user.id;
      const { reply } = req.body;

      if (!reply) {
        return res.status(400).json({ message: "Reply content is required" });
      }

      const updatedFeedback = await db.query(
        `UPDATE feedback 
       SET 
         reply = $1, 
         replied_by = $2, 
         replied_at = CURRENT_TIMESTAMP
       WHERE feedback_id = $3
       RETURNING *`,
        [reply, replierUserId, feedbackId],
      );

      if (updatedFeedback.rows.length === 0) {
        return res.status(404).json({ message: "Feedback not found" });
      }

      res.json(updatedFeedback.rows[0]);
    } catch (err) {
      console.error("Reply to Feedback Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

module.exports = router;
