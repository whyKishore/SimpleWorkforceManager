// frontend/src/pages/MyFeedbackPage.js
import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDateTime } from "../utils/formatDate";
import { Card, List, Typography, message, Tag, Avatar } from "antd";

const { Title, Text, Paragraph } = Typography;

function MyFeedbackPage({ user }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/feedback/my-feedback");
        setFeedbackList(response.data);
      } catch (err) {
        message.error("Failed to fetch feedback.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        My Submitted Feedback
      </Title>

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={feedbackList}
        locale={{ emptyText: "You have not submitted any feedback." }}
        renderItem={(item) => (
          <List.Item
            key={item.feedback_id}
            extra={
              // Show status on the side
              item.reply ? (
                <Tag color="green">Replied</Tag>
              ) : (
                <Tag color="blue">Pending</Tag>
              )
            }
          >
            <List.Item.Meta
              avatar={<Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>}
              title={<Title level={4}>{item.title}</Title>}
              description={
                <span>
                  Submitted On:{" "}
                  {formatDateTime(item.submitted_at, user.date_format)}
                </span>
              }
            />
            <Paragraph>{item.content}</Paragraph>

            {/* Reply Section */}
            <div
              style={{
                marginTop: "16px",
                paddingLeft: "24px",
                borderLeft: "2px solid #eee",
              }}
            >
              <Title level={5}>Management Reply:</Title>
              {item.reply ? (
                <div>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: "#1890ff" }}>
                        {item.replied_by_username.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    title={item.replied_by_username}
                    description={
                      <>
                        <Paragraph>{item.reply}</Paragraph>
                        <Text type="secondary">
                          {formatDateTime(item.replied_at, user.date_format)}
                        </Text>
                      </>
                    }
                  />
                </div>
              ) : (
                <Text type="secondary">No reply yet.</Text>
              )}
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default MyFeedbackPage;
