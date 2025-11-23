// frontend/src/pages/ResetPasswordPage.js

import React, { useState } from "react";
import api from "../api";

// We will pass the handleLogout function from App.js
function ResetPasswordPage({ onPasswordReset }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/auth/reset-password", { newPassword });
      setMessage(response.data.message);

      // On success, log the user out so they can log back in
      // with their new password.
      setTimeout(() => {
        onPasswordReset();
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Create Your New Password</h2>
      <p>
        This is your first login. You must set a new password before you can
        continue.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px 0" }}>
          <label>New Password:</label>
          <br />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Confirm New Password:</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Set New Password</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default ResetPasswordPage;
