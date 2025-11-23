// frontend/src/pages/SubmitReportPage.js

import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, message } from "antd"; // Import AntD components

const { Title } = Typography;

function SubmitReportPage() {
  const [form] = Form.useForm(); // AntD form hook
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      // 'values' comes directly from the AntD form
      await api.post("/reports", values);

      message.success("Report submitted successfully!");

      form.resetFields(); // Clear the form

      // Redirect back to the dashboard after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to submit report.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        Submit New Report
      </Title>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input a title for your report.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[
            { required: true, message: "Please add content for your report." },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit Report
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SubmitReportPage;
