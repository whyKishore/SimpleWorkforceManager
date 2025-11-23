// backend/routes/chat.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const { authenticateToken } = require("../middleware/auth");

router.use(authenticateToken);

// 1. Search for users (Unchanged)
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const myUserId = req.user.id;

    const searchQuery = `
      SELECT u.user_id, u.username, u.email, p.first_name, p.last_name
      FROM users u
      LEFT JOIN user_profiles p ON u.user_id = p.user_id
      WHERE (u.username ILIKE $1 OR u.email ILIKE $1) AND u.user_id != $2
    `;
    const { rows } = await db.query(searchQuery, [`%${query}%`, myUserId]);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// 2. Get all conversations (contacts) (Unchanged)
router.get("/conversations", async (req, res) => {
  try {
    const myUserId = req.user.id;
    const query = `
      SELECT 
        c.conversation_id, c.status, c.blocked_by,
        u.user_id, u.username, p.first_name, p.last_name
      FROM conversations c
      JOIN users u ON u.user_id = (CASE WHEN c.user1_id = $1 THEN c.user2_id ELSE c.user1_id END)
      LEFT JOIN user_profiles p ON u.user_id = p.user_id
      WHERE (c.user1_id = $1 OR c.user2_id = $1)
    `;
    const { rows } = await db.query(query, [myUserId]);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// 3. Get message history with a specific USER (UPDATED)
// GET /api/chat/history/:userId
router.get("/history/:userId", async (req, res) => {
  try {
    const otherUserId = parseInt(req.params.userId);
    const myUserId = req.user.id;

    const user1_id = Math.min(myUserId, otherUserId);
    const user2_id = Math.max(myUserId, otherUserId);

    const convo = await db.query(
      "SELECT * FROM conversations WHERE user1_id = $1 AND user2_id = $2",
      [user1_id, user2_id],
    );

    if (convo.rows.length === 0) {
      // No conversation yet, return empty
      return res.json({ conversation: null, messages: [] });
    }

    const conversation = convo.rows[0];

    if (conversation.status === "blocked") {
      return res.status(403).json({ message: "This conversation is blocked." });
    }

    // Determine which "cleared_at" field to use
    let myClearedAtTimestamp =
      conversation.user1_id === myUserId
        ? conversation.user1_cleared_at
        : conversation.user2_cleared_at;

    const clearedAt = myClearedAtTimestamp || "1970-01-01T00:00:00Z";

    // Get messages sent *after* the user cleared the chat
    const messagesRes = await db.query(
      `SELECT * FROM messages 
       WHERE conversation_id = $1 AND sent_at > $2
       ORDER BY sent_at ASC`,
      [conversation.conversation_id, clearedAt],
    );

    // RETURN BOTH the conversation object and the messages
    res.json({ conversation: conversation, messages: messagesRes.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// 4. Block a conversation (Unchanged)
router.put("/conversation/:convoId/block", async (req, res) => {
  const conversation_id = req.params.convoId;
  const myUserId = req.user.id;

  const { rows } = await db.query(
    `UPDATE conversations
     SET status = 'blocked', blocked_by = $1
     WHERE conversation_id = $2 AND (user1_id = $1 OR user2_id = $1)
     RETURNING *`,
    [myUserId, conversation_id],
  );
  if (rows.length === 0)
    return res.status(404).json({ message: "Conversation not found" });
  res.json(rows[0]);
});

// 5. Unblock a conversation (Unchanged)
router.put("/conversation/:convoId/unblock", async (req, res) => {
  const conversation_id = req.params.convoId;
  const myUserId = req.user.id;

  const { rows } = await db.query(
    `UPDATE conversations
     SET status = 'active', blocked_by = NULL
     WHERE conversation_id = $1 AND blocked_by = $2
     RETURNING *`,
    [conversation_id, myUserId],
  );
  if (rows.length === 0)
    return res
      .status(403)
      .json({ message: "Cannot unblock this conversation." });
  res.json(rows[0]);
});

// 6. Clear Chat (UPDATED LOGIC)
// DELETE /api/chat/conversation/:convoId/clear
router.delete("/conversation/:convoId/clear", async (req, res) => {
  const conversation_id = req.params.convoId;
  const myUserId = req.user.id;

  try {
    // This query conditionally updates the correct timestamp
    const query = `
      UPDATE conversations
      SET 
        user1_cleared_at = CASE WHEN user1_id = $1 THEN NOW() ELSE user1_cleared_at END,
        user2_cleared_at = CASE WHEN user2_id = $1 THEN NOW() ELSE user2_cleared_at END
      WHERE conversation_id = $2 AND (user1_id = $1 OR user2_id = $1)
    `;

    await db.query(query, [myUserId, conversation_id]);
    res.json({ message: "Chat cleared successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
