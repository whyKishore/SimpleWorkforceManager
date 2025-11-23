// frontend/src/pages/SettingsPage.js

import React, { useState, useEffect } from "react";
import api from "../api";
import {
  Tabs,
  Form,
  Select,
  Checkbox,
  Button,
  Input,
  Card,
  Typography,
  message,
  // NEW: Removed 'Space'
} from "antd";

const { Title } = Typography;
const { Option } = Select;

// --- Main Settings Page Component ---
function SettingsPage({ user, onSettingsUpdate }) {
  const [personalForm] = Form.useForm();
  const [systemForm] = Form.useForm();

  const [isLoading, setIsLoading] = useState(true);

  // --- Fetch all settings on load ---
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get("/settings");
        personalForm.setFieldsValue(res.data.personal);
        if (res.data.system) {
          systemForm.setFieldsValue(res.data.system);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load settings", err);
        setIsLoading(false);
        message.error("Failed to load settings.");
      }
    };
    fetchSettings();
  }, [personalForm, systemForm]); // useEffect is fine here

  // --- Handlers for saving ---
  const handlePersonalSave = async (values) => {
    try {
      await api.put("/settings/personal", values);
      message.success("Personal settings saved!");
      onSettingsUpdate();
    } catch (err) {
      message.error("Failed to save settings.");
    }
  };

  const handleSystemSave = async (values) => {
    try {
      await api.put("/settings/system", values);
      message.success("System settings saved!");
      document.title = values.company_name;
    } catch (err) {
      message.error("Failed to save system settings.");
    }
  };

  // ... (rest of the component is unchanged) ...

  const items = [
    {
      key: "1",
      label: "Preferences",
      children: (
        <Card title="My Preferences">
          <Form
            form={personalForm}
            layout="vertical"
            onFinish={handlePersonalSave}
          >
            <Form.Item label="Date Format" name="date_format">
              <Select>
                <Option value="MM/DD/YYYY">MM/DD/YYYY (US)</Option>
                <Option value="DD/MM/YYYY">DD/MM/YYYY (EU/India)</Option>
              </Select>
            </Form.Item>

            <Title level={5}>Email Notifications</Title>
            <Form.Item
              name={["notification_prefs", "chat_messages"]}
              valuePropName="checked"
            >
              <Checkbox>New Chat Messages</Checkbox>
            </Form.Item>

            {user.role !== "admin" && (
              <>
                <Form.Item
                  name={["notification_prefs", "new_tasks"]}
                  valuePropName="checked"
                >
                  <Checkbox>New Task Assigned</Checkbox>
                </Form.Item>
                <Form.Item
                  name={["notification_prefs", "reply_complaint"]}
                  valuePropName="checked"
                >
                  <Checkbox>Complaint/Feedback Replies</Checkbox>
                </Form.Item>
              </>
            )}
            <Button type="primary" htmlType="submit">
              Save Preferences
            </Button>
          </Form>
        </Card>
      ),
    },
    {
      key: "2",
      label: "Security",
      children: (
        <Card title="Change Password">
          <ChangePasswordForm />
        </Card>
      ),
    },
  ];

  if (user.role === "admin") {
    items.push({
      key: "3",
      label: "System Settings",
      children: (
        <Card title="System Settings (Admin)">
          <Form form={systemForm} layout="vertical" onFinish={handleSystemSave}>
            <Form.Item label="Company Name" name="company_name">
              <Input />
            </Form.Item>
            <Form.Item label="Currency Symbol" name="currency_symbol">
              <Input style={{ width: "100px" }} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Save System Settings
            </Button>
          </Form>
        </Card>
      ),
    });
  }

  if (isLoading) return <p>Loading settings...</p>;

  return (
    <div>
      <Title level={2} style={{ marginBottom: "24px" }}>
        Settings
      </Title>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

// --- Sub-Component for Changing Password ---
function ChangePasswordForm() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const res = await api.put("/settings/change-password", values);
      message.success(res.data.message);
      form.resetFields();
    } catch (err) {
      message.error(err.response?.data?.message || "Error changing password");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Old Password"
        name="oldPassword"
        rules={[{ required: true, message: "Please input your old password" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[
          {
            required: true,
            message: "Please input your new password (min. 6 chars)",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Change Password
      </Button>
    </Form>
  );
}

export default SettingsPage;
