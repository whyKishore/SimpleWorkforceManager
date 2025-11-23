import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Alert, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import api from "../api";

const { Title } = Typography;

function Login({ onLoginSuccess }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setError("");
    setLoading(true);
    try {
      const response = await api.post("/auth/login", values);
      onLoginSuccess(response.data.token);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <Card style={{ maxWidth: 400, margin: "100px auto", padding: "24px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Login</Title>

      <Form name="normal_login" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "Please input your username" }]}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: "Please input your password" }]}>
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 24 }} />}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>
            Log in
          </Button>
        </Form.Item>

        <Link to="/forgot-password">Forgot your password?</Link>
      </Form>
    </Card>
  );
}

export default Login;
