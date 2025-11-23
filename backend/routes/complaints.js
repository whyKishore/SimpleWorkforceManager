// routes/complaints.js

const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// --- Staff Route: Submit a New Complaint ---
// POST /api/complaints/
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

      const newComplaint = await db.query(
        `INSERT INTO complaints (user_id, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
        [userId, title, content],
      );

      res.status(201).json(newComplaint.rows[0]);
    } catch (err) {
      console.error("Submit Complaint Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Staff Route: View My Complaints (and replies) ---
// GET /api/complaints/my-complaints
router.get("/my-complaints", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // This query is more complex. We use a Common Table Expression (CTE)
    // and JSON aggregation to get the replies nested inside each complaint.
    const query = `
      WITH complaint_replies_agg AS (
        SELECT
          r.complaint_id,
          json_agg(
            json_build_object(
              'reply_id', r.reply_id,
              'content', r.content,
              'replied_at', r.replied_at,
              'replier_username', u.username
            ) ORDER BY r.replied_at ASC
          ) AS replies
        FROM complaint_replies r
        LEFT JOIN users u ON r.user_id = u.user_id
        GROUP BY r.complaint_id
      )
      SELECT 
        c.*, 
        COALESCE(cra.replies, '[]'::json) AS replies
      FROM complaints c
      LEFT JOIN complaint_replies_agg cra ON c.complaint_id = cra.complaint_id
      WHERE c.user_id = $1
      ORDER BY c.submitted_at DESC;
    `;

    const { rows } = await db.query(query, [userId]);
    res.json(rows);
  } catch (err) {
    console.error("Get My Complaints Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// --- Admin/Manager Route: View All Complaints ---
// GET /api/complaints/all
router.get(
  "/all",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      // This query is similar to the one above but gets ALL complaints
      // and also includes the username of the person who submitted the complaint.
      const query = `
      WITH complaint_replies_agg AS (
        SELECT
          r.complaint_id,
          json_agg(
            json_build_object(
              'reply_id', r.reply_id,
              'content', r.content,
              'replied_at', r.replied_at,
              'replier_username', u.username
            ) ORDER BY r.replied_at ASC
          ) AS replies
        FROM complaint_replies r
        LEFT JOIN users u ON r.user_id = u.user_id
        GROUP BY r.complaint_id
      )
      SELECT 
        c.*,
        submitter.username AS submitted_by_username,
        COALESCE(cra.replies, '[]'::json) AS replies
      FROM complaints c
      LEFT JOIN users submitter ON c.user_id = submitter.user_id
      LEFT JOIN complaint_replies_agg cra ON c.complaint_id = cra.complaint_id
      ORDER BY c.status ASC, c.submitted_at DESC;
    `;

      const { rows } = await db.query(query);
      res.json(rows);
    } catch (err) {
      console.error("Get All Complaints Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: Reply to a Complaint ---
// POST /api/complaints/:id/reply
router.post(
  "/:id/reply",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const complaintId = req.params.id;
      const replierUserId = req.user.id;
      const { content } = req.body;

      if (!content) {
        return res.status(400).json({ message: "Reply content is required" });
      }

      // Check if complaint exists
      const complaintCheck = await db.query(
        "SELECT * FROM complaints WHERE complaint_id = $1",
        [complaintId],
      );
      if (complaintCheck.rows.length === 0) {
        return res.status(404).json({ message: "Complaint not found" });
      }

      const newReply = await db.query(
        `INSERT INTO complaint_replies (complaint_id, user_id, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
        [complaintId, replierUserId, content],
      );

      res.status(201).json(newReply.rows[0]);
    } catch (err) {
      console.error("Submit Reply Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

// --- Admin/Manager Route: Update Complaint Status ---
// PUT /api/complaints/:id/status
router.put(
  "/:id/status",
  [authenticateToken, checkRole(["admin", "manager"])],
  async (req, res) => {
    try {
      const complaintId = req.params.id;
      const { status } = req.body;

      // Validate status
      if (status !== "open" && status !== "resolved") {
        return res
          .status(400)
          .json({ message: "Invalid status. Must be 'open' or 'resolved'." });
      }

      const updatedComplaint = await db.query(
        `UPDATE complaints SET status = $1
       WHERE complaint_id = $2
       RETURNING *`,
        [status, complaintId],
      );

      if (updatedComplaint.rows.length === 0) {
        return res.status(404).json({ message: "Complaint not found" });
      }

      res.json(updatedComplaint.rows[0]);
    } catch (err) {
      console.error("Update Status Error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

module.exports = router;
