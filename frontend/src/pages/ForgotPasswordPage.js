// frontend/src/pages/ForgotPasswordPage.js
import React, { useState } from "react";
import api from "../api";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      // Call the backend endpoint
      const res = await api.post("/auth/forgot-password", { email });
      setMessage(res.data.message);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>
        Enter your email address, and we will send you a link to reset your
        password.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default ForgotPasswordPage;
