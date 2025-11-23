import React from "react";
import { Link } from "react-router-dom";
import { Card, List, Row, Col, Typography } from "antd";
import ClockInWidget from "../components/ClockInWidget";

const { Title, Text } = Typography;

const STAFF_ACTIONS = [
  { name: "View My Tasks", path: "/tasks" },
  { name: "View My Allowances", path: "/my-allowances" },
  { name: "View My Complaints", path: "/my-complaints" },
  { name: "View My Feedback", path: "/my-feedback" },
];

const STAFF_SUBMISSIONS = [
  { name: "Submit a New Report", path: "/submit-report" },
  { name: "Submit a New Complaint", path: "/submit-complaint" },
  { name: "Submit Feedback", path: "/submit-feedback" },
];

function DashboardPage({ user }) {
  const displayName = user.first_name || user.username;

  return (
    <div>
      <Title level={2} style={{ marginBottom: "24px" }}>Dashboard</Title>

      {user.role === "staff" ? (
        <Row gutter={[24, 24]}>
          <Col xs={24} md={16}>
            <Card title="Staff Actions">
              <Text>Welcome, {displayName}! Here are your available actions.</Text>

              <Title level={4} style={{ marginTop: 20 }}>View</Title>
              <List
                bordered
                dataSource={STAFF_ACTIONS}
                renderItem={(item) => (
                  <List.Item>
                    <Link to={item.path}>{item.name}</Link>
                  </List.Item>
                )}
              />

              <Title level={4} style={{ marginTop: 20 }}>Submit</Title>
              <List
                bordered
                dataSource={STAFF_SUBMISSIONS}
                renderItem={(item) => (
                  <List.Item>
                    <Link to={item.path}>{item.name}</Link>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <ClockInWidget />
          </Col>
        </Row>
      ) : (
        <Card title={`Welcome, ${displayName}!`}>
          <Text>
            You can manage your team, review submissions, and handle system tasks using the navigation bar.
          </Text>
        </Card>
      )}
    </div>
  );
}

export default DashboardPage;
