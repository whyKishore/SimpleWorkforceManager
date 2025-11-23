// frontend/src/pages/ComplaintsPage.js

import React, { useState, useEffect } from "react";
import api from "../api";
import { formatDateTime } from "../utils/formatDate";
import {
  Card,
  List,
  Button,
  Form,
  Input,
  Select,
  Tag,
  Typography,
  message,
  Avatar,
} from "antd";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// --- Sub-component for Reply Form ---
function ComplaintReplyForm({ complaintId, onReplySubmitted }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await api.post(`/complaints/${complaintId}/reply`, values);
      message.success("Reply submitted");
      form.resetFields();
      onReplySubmitted(); // Tell parent to refresh
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to submit reply");
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ marginTop: "16px" }}>
      <Form.Item
        name="content"
        rules={[{ required: true, message: "Reply cannot be empty" }]}
      >
        <Input.TextArea rows={2} placeholder="Write your reply..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Reply
        </Button>
      </Form.Item>
    </Form>
  );
}

// --- Main Page Component ---
function ComplaintsPage({ user }) {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/complaints/all");
      setComplaints(response.data);
    } catch (err) {
      message.error("Failed to fetch complaints.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleUpdateStatus = async (complaintId, newStatus) => {
    try {
      await api.put(`/complaints/${complaintId}/status`, { status: newStatus });
      message.success(`Complaint marked as ${newStatus}`);
      fetchComplaints(); // Refresh the list
    } catch (err) {
      message.error("Failed to update status.");
      console.error(err);
    }
  };

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        All Submitted Complaints
      </Title>

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={complaints}
        renderItem={(complaint) => (
          <List.Item
            key={complaint.complaint_id}
            actions={[
              <Select
                defaultValue={complaint.status}
                style={{ width: 120 }}
                onChange={(value) =>
                  handleUpdateStatus(complaint.complaint_id, value)
                }
              >
                <Option value="open">
                  <Tag color="red">Open</Tag>
                </Option>
                <Option value="resolved">
                  <Tag color="green">Resolved</Tag>
                </Option>
              </Select>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar>
                  {complaint.submitted_by_username.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={<Title level={4}>{complaint.title}</Title>}
              description={
                <span>
                  Submitted by: {complaint.submitted_by_username} | On:{" "}
                  {formatDateTime(complaint.submitted_at, user.date_format)}
                </span>
              }
            />
            <Paragraph>{complaint.content}</Paragraph>

            {/* Replies Section */}
            <div style={{ marginTop: "16px", paddingLeft: "24px" }}>
              <Title level={5}>Replies:</Title>
              {complaint.replies.length === 0 ? (
                <Text type="secondary">No replies yet.</Text>
              ) : (
                <List
                  dataSource={complaint.replies}
                  renderItem={(reply) => (
                    <List.Item>
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
              {/* Reply Form */}
              <ComplaintReplyForm
                complaintId={complaint.complaint_id}
                onReplySubmitted={fetchComplaints}
              />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default ComplaintsPage;
