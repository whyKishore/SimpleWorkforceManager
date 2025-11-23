// frontend/src/pages/MyComplaintsPage.js
import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDateTime } from "../utils/formatDate";
import { Card, List, Typography, message, Tag, Avatar } from "antd"; // Import AntD components

const { Title, Text, Paragraph } = Typography;

function MyComplaintsPage({ user }) {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/complaints/my-complaints");
        setComplaints(response.data);
      } catch (err) {
        message.error("Failed to fetch complaints.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComplaints();
  }, []);

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        My Submitted Complaints
      </Title>

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={complaints}
        locale={{ emptyText: "You have not submitted any complaints." }}
        renderItem={(complaint) => (
          <List.Item
            key={complaint.complaint_id}
            extra={
              // Show status on the side
              complaint.status === "open" ? (
                <Tag color="red">Open</Tag>
              ) : (
                <Tag color="green">Resolved</Tag>
              )
            }
          >
            <List.Item.Meta
              title={<Title level={4}>{complaint.title}</Title>}
              description={
                <span>
                  Submitted On:{" "}
                  {formatDateTime(complaint.submitted_at, user.date_format)}
                </span>
              }
            />
            <Paragraph>{complaint.content}</Paragraph>

            {/* Replies Section */}
            <div
              style={{
                marginTop: "16px",
                paddingLeft: "24px",
                borderLeft: "2px solid #eee",
              }}
            >
              <Title level={5}>Replies:</Title>
              {complaint.replies.length === 0 ? (
                <Text type="secondary">No replies yet.</Text>
              ) : (
                <List
                  dataSource={complaint.replies}
                  renderItem={(reply) => (
                    <List.Item style={{ paddingLeft: 0 }}>
                      <List.Item.Meta
                        avatar={
                          <Avatar style={{ backgroundColor: "#1890ff" }}>
                            {reply.replier_username.charAt(0).toUpperCase()}
                          </Avatar>
                        }
                        title={reply.replier_username}
                        description={
                          <>
                            <Paragraph>{reply.content}</Paragraph>
                            <Text type="secondary">
                              {formatDateTime(
                                reply.replied_at,
                                user.date_format,
                              )}
                            </Text>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default MyComplaintsPage;
