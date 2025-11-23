// frontend/src/pages/AttendancePage.js
import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDate, formatDateTime } from "../utils/formatDate";
import { Card, Table, Typography, message } from "antd"; // Import AntD components

const { Title } = Typography;

function AttendancePage({ user }) {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/attendance/all");
        setAttendanceRecords(response.data);
      } catch (err) {
        message.error("Failed to fetch attendance records.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  // Define the columns for the AntD Table
  const columns = [
    {
      title: "Staff Member",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Date",
      dataIndex: "attendance_date",
      key: "date",
      render: (date) => formatDate(date, user.date_format),
    },
    {
      title: "Clocked In",
      dataIndex: "clock_in_time",
      key: "clock_in",
      render: (time) => formatDateTime(time, user.date_format),
    },
    {
      title: "Clocked Out",
      dataIndex: "clock_out_time",
      key: "clock_out",
      render: (time) => (time ? formatDateTime(time, user.date_format) : "N/A"),
    },
  ];

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        All Attendance Records
      </Title>
      <Table
        columns={columns}
        dataSource={attendanceRecords}
        loading={isLoading}
        rowKey="attendance_id"
      />
    </Card>
  );
}

export default AttendancePage;
