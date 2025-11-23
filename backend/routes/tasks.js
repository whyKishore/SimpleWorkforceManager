const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken, checkRole } = require("../middleware/auth");

// POST /api/tasks/
router.post("/", [authenticateToken, checkRole(["admin", "manager"])], async (req, res) => {
  try {
    const { title, description, assigned_to, due_date } = req.body;
    const assigned_by = req.user.id;

    if (!title || !assigned_to) {
      return res.status(400).json({ message: "Title and assigned_to are required" });
    }

    const userCheck = await db.query("SELECT role FROM users WHERE user_id = $1", [assigned_to]);
    if (userCheck.rows.length === 0) {
      return res.status(404).json({ message: "Assigned user does not exist" });
    }

    const newTask = await db.query(
      "INSERT INTO tasks (title, description, assigned_to, assigned_by, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, assigned_to, assigned_by, due_date || null]
    );

    res.status(201).json(newTask.rows[0]);
  } catch (err) {
    console.error("Create Task Error:", err.message);
    if (err.code === "23503") {
      return res.status(404).json({ message: "Assigned user not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/tasks/mytasks
router.get("/mytasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await db.query(
      `SELECT t.*, u.username AS assigned_by_username
       FROM tasks t
       LEFT JOIN users u ON t.assigned_by = u.user_id
       WHERE t.assigned_to = $1
       ORDER BY t.created_at DESC`,
      [req.user.id]
    );

    res.json(tasks.rows);
  } catch (err) {
    console.error("Get My Tasks Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/tasks/
router.get("/", [authenticateToken, checkRole(["admin", "manager"])], async (req, res) => {
  try {
    const allTasks = await db.query(
      `SELECT t.*, 
              assignee.username AS assigned_to_username,
              assigner.username AS assigned_by_username
       FROM tasks t
       LEFT JOIN users AS assignee ON t.assigned_to = assignee.user_id
       LEFT JOIN users AS assigner ON t.assigned_by = assigner.user_id
       ORDER BY t.created_at DESC`
    );

    res.json(allTasks.rows);
  } catch (err) {
    console.error("Get All Tasks Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/tasks/:id
router.put("/:id", [authenticateToken, checkRole(["manager"])], async (req, res) => {
  try {
    const { title, description, assigned_to, status, due_date } = req.body;

    if (!title || !assigned_to || !status) {
      return res.status(400).json({ message: "Title, assigned_to, and status are required" });
    }

    if (!["pending", "in_progress", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedTask = await db.query(
      "UPDATE tasks SET title = $1, description = $2, assigned_to = $3, status = $4, due_date = $5 WHERE task_id = $6 RETURNING *",
      [title, description, assigned_to, status, due_date || null, req.params.id]
    );

    if (updatedTask.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask.rows[0]);
  } catch (err) {
    console.error("Update Task Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/tasks/:id
router.delete("/:id", [authenticateToken, checkRole(["manager"])], async (req, res) => {
  try {
    const deleteOp = await db.query("DELETE FROM tasks WHERE task_id = $1 RETURNING title", [req.params.id]);

    if (deleteOp.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: `Task "${deleteOp.rows[0].title}" deleted successfully` });
  } catch (err) {
    console.error("Delete Task Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH /api/tasks/:id/status
router.patch("/:id/status", [authenticateToken, checkRole(["staff"])], async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
    
    if (!["pending", "in_progress", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedTask = await db.query(
      "UPDATE tasks SET status = $1 WHERE task_id = $2 AND assigned_to = $3 RETURNING *",
      [status, req.params.id, req.user.id]
    );

    if (updatedTask.rows.length === 0) {
      return res.status(404).json({ message: "Task not found or permission denied" });
    }

    res.json(updatedTask.rows[0]);
  } catch (err) {
    console.error("Update Task Status Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
