// backend/index.js
require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const { Server } = require("socket.io");
const { authenticateToken, checkRole } = require("./middleware/auth");

const authRoutes = require("./routes/auth");
const staffRoutes = require("./routes/staff");
const taskRoutes = require("./routes/tasks");
const attendanceRoutes = require("./routes/attendance");
const reportRoutes = require("./routes/reports");
const complaintRoutes = require("./routes/complaints");
const feedbackRoutes = require("./routes/feedback");
const allowanceRoutes = require("./routes/allowances");
const chatRoutes = require("./routes/chat");
const profileRoutes = require("./routes/profile");
const settingsRoutes = require("./routes/settings");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000" }));
app.use(express.json());

// HTTP request logging
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); // Apache combined log format for production
} else {
  app.use(morgan('dev')); // Concise colored output for development
}

// Rate limiting configuration
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: { message: "Too many login attempts, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute per IP
  message: { message: "Too many requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiters
app.use("/api/auth/login", loginLimiter);
app.use("/api/", apiLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/allowances", allowanceRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/settings", settingsRoutes);

// Socket.io Connection Logic
const userSocketMap = new Map();

const getUserIdFromSocket = (socketId) => {
  for (const [userId, sid] of userSocketMap.entries()) {
    if (sid === socketId) return userId;
  }
  return null;
};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("authenticate", (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.user) {
        console.log(`User ${decoded.user.id} authenticated with socket ${socket.id}`);
        userSocketMap.set(decoded.user.id, socket.id);
      }
    } catch (err) {
      console.error("Socket authentication failed:", err.message);
      socket.disconnect();
    }
  });

  socket.on("send_message", async (data, callback) => {
    const sender_id = getUserIdFromSocket(socket.id);
    if (!sender_id) {
      return callback({ status: "error", message: "Not authenticated" });
    }

    const { receiver_id, content } = data;
    const db = require("./db");

    try {
      const user1_id = Math.min(sender_id, receiver_id);
      const user2_id = Math.max(sender_id, receiver_id);

      let convo = await db.query(
        "SELECT * FROM conversations WHERE user1_id = $1 AND user2_id = $2",
        [user1_id, user2_id]
      );

      let conversation;
      if (convo.rows.length === 0) {
        const newConvo = await db.query(
          "INSERT INTO conversations (user1_id, user2_id, status) VALUES ($1, $2, 'active') RETURNING *",
          [user1_id, user2_id]
        );
        conversation = newConvo.rows[0];
      } else {
        conversation = convo.rows[0];
      }

      if (conversation.status === "blocked") {
        return callback({ status: "error", message: "This conversation is blocked." });
      }

      const newMessage = await db.query(
        "INSERT INTO messages (conversation_id, sender_id, content) VALUES ($1, $2, $3) RETURNING *",
        [conversation.conversation_id, sender_id, content]
      );

      const messagePayload = newMessage.rows[0];
      const receiverSocketId = userSocketMap.get(receiver_id);
      
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive_message", {
          message: messagePayload,
          conversation: conversation,
        });
      }

      callback({ status: "ok", message: messagePayload, conversation: conversation });
    } catch (err) {
      console.error("Send Message Error:", err);
      callback({ status: "error", message: "Server error" });
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    const userId = getUserIdFromSocket(socket.id);
    if (userId) userSocketMap.delete(userId);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
