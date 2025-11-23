// frontend/src/pages/FeedbackPage.js

import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDateTime } from "../utils/formatDate";
import {
  Card,
  List,
  Button,
  Form,
  Input,
  Tag,
  Typography,
  message,
  Avatar,
} from "antd";

const { Title, Paragraph } = Typography;

// --- Sub-component for Reply Form ---
function FeedbackReplyForm({ feedbackItem, onReplySubmitted }) {
  const [form] = Form.useForm();

  // Set initial value when the component loads
  useEffect(() => {
    form.setFieldsValue({ reply: feedbackItem.reply || "" });
  }, [feedbackItem, form]);

  const handleSubmit = async (values) => {
    try {
      await api.put(`/feedback/${feedbackItem.feedback_id}/reply`, {
        reply: values.reply,
      });
      message.success("Reply submitted");
      onReplySubmitted(); // Tell parent to refresh
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to submit reply");
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ marginTop: "16px" }}>
      <Form.Item
        name="reply"
        rules={[{ required: true, message: "Reply cannot be empty" }]}
      >
        <Input.TextArea rows={2} placeholder="Write your reply..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {feedbackItem.reply ? "Update Reply" : "Submit Reply"}
        </Button>
      </Form.Item>
    </Form>
  );
}

// --- The Main Page Component ---
function FeedbackPage({ user }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/feedback/all");
      setFeedbackList(response.data);
    } catch (err) {
      message.error("Failed to fetch feedback.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  if (isLoading) return <p>Loading feedback...</p>;

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        All Submitted Feedback
      </Title>

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={feedbackList}
        renderItem={(item) => (
          <List.Item
            key={item.feedback_id}
            actions={[
              item.reply ? (
                <Tag color="green">Replied</Tag>
              ) : (
                <Tag color="blue">Pending</Tag>
              ),
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar>
                  {item.submitted_by_username.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={<Title level={4}>{item.title}</Title>}
              description={
                <span>
                  Submitted by: {item.submitted_by_username} | On:{" "}
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
              {item.reply && (
                <div style={{ marginBottom: "10px" }}>
                  <Paragraph>{item.reply}</Paragraph>
                  <small>
                    By: {item.replied_by_username} | On:{" "}
                    {formatDateTime(item.replied_at, user.date_format)}
                  </small>
                </div>
              )}

              {/* Reply Form */}
              <FeedbackReplyForm
                feedbackItem={item}
                onReplySubmitted={fetchFeedback}
              />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default FeedbackPage;
