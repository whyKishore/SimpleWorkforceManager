// frontend/src/components/ClockInWidget.js

import React, { useState, useEffect } from "react";
import api from "../api";

// NEW: Import AntD components
import { Card, Button, Typography, Alert, Spin } from "antd";
const { Text } = Typography;

function ClockInWidget() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchStatus = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/attendance/status");
      setIsClockedIn(response.data.isClockedIn);
    } catch (err) {
      console.error(err);
      setError("Error fetching status");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleClockIn = async () => {
    try {
      setMessage("");
      setError("");
      await api.post("/attendance/clock-in");
      fetchStatus();
      setMessage("Clocked in successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Clock-in failed");
    }
  };

  const handleClockOut = async () => {
    try {
      setMessage("");
      setError("");
      await api.post("/attendance/clock-out");
      fetchStatus();
      setMessage("Clocked out successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Clock-out failed");
    }
  };

  return (
    <Card title="Attendance">
      {isLoading ? (
        <Spin />
      ) : isClockedIn ? (
        <div>
          <Text>You are currently clocked in.</Text>
          <Button
            type="primary"
            danger
            onClick={handleClockOut}
            style={{ width: "100%", marginTop: "16px" }}
          >
            Clock Out
          </Button>
        </div>
      ) : (
        <div>
          <Text>You are currently clocked out.</Text>
          <Button
            type="primary"
            onClick={handleClockIn}
            style={{ width: "100%", marginTop: "16px" }}
          >
            Clock In
          </Button>
        </div>
      )}
      {message && (
        <Alert
          message={message}
          type="success"
          showIcon
          style={{ marginTop: "16px" }}
        />
      )}
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginTop: "16px" }}
        />
      )}
    </Card>
  );
}

export default ClockInWidget;
