// frontend/src/pages/ReportsPage.js
import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDateTime } from "../utils/formatDate";
import { Card, Table, Typography, message } from "antd"; // Import AntD components

const { Title, Paragraph } = Typography;

function ReportsPage({ user }) {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/reports");
        setReports(response.data);
      } catch (err) {
        message.error("Failed to fetch reports.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReports();
  }, []);

  // Define the columns for the AntD Table
  const columns = [
    {
      title: "Submitted By",
      dataIndex: "username",
      key: "username",
      width: "15%",
    },
    {
      title: "Date",
      dataIndex: "submitted_at",
      key: "date",
      render: (date) => formatDateTime(date, user.date_format),
      width: "20%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "25%",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      width: "40%",
      // Use a Paragraph for better word wrapping
      render: (text) => (
        <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
          {text}
        </Paragraph>
      ),
    },
  ];

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        All Submitted Reports
      </Title>
      <Table
        columns={columns}
        dataSource={reports}
        loading={isLoading}
        rowKey="report_id"
      />
    </Card>
  );
}

export default ReportsPage;
