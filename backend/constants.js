// Application constants
module.exports = {
  USER_ROLES: {
    ADMIN: "admin",
    MANAGER: "manager",
    STAFF: "staff",
  },

  TASK_STATUS: {
    PENDING: "pending",
    IN_PROGRESS: "in_progress",
    COMPLETED: "completed",
  },

  COMPLAINT_STATUS: {
    OPEN: "open",
    RESOLVED: "resolved",
  },

  CONVERSATION_STATUS: {
    ACTIVE: "active",
    BLOCKED: "blocked",
  },

  JWT_EXPIRY: "1h",
  PASSWORD_RESET_EXPIRY_MINUTES: 15,
  MIN_PASSWORD_LENGTH: 6,
};
