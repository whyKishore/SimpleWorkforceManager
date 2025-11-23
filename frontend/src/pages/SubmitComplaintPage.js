// frontend/src/pages/SubmitComplaintPage.js

import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, message } from "antd"; // Import AntD components

const { Title, Paragraph } = Typography;

function SubmitComplaintPage() {
  const [form] = Form.useForm(); // AntD form hook
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      // 'values' comes directly from the AntD form
      await api.post("/complaints", values);

      message.success("Complaint submitted successfully!");

      form.resetFields(); // Clear the form

      // Redirect back to the dashboard after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      message.error(
        err.response?.data?.message || "Failed to submit complaint.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "8px" }}>
        Submit New Complaint
      </Title>
      <Paragraph type="secondary" style={{ marginBottom: "24px" }}>
        Your complaint will be sent to management for review.
      </Paragraph>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input a title for your complaint.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: "Please add details for your complaint.",
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit Complaint
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SubmitComplaintPage;
