// frontend/src/pages/StaffPage.js
import React, { useState, useEffect, useCallback } from "react";
import api from "../api";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
  message,
  Typography,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

function StaffPage({ user }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- NEW: Modal & Form State ---
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [form] = Form.useForm(); // AntD's form hook

  // --- Fetch All Users ---
  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/staff");
      setUsers(response.data);
    } catch (err) {
      message.error("Failed to fetch users.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // --- Modal & Form Handlers ---
  const showCreateModal = () => {
    setIsEditing(false);
    form.resetFields(); // Clear the form
    setIsModalVisible(true);
  };

  const showEditModal = (userRecord) => {
    setIsEditing(true);
    setEditingUserId(userRecord.user_id);
    form.setFieldsValue({
      // Pre-fill the form
      ...userRecord,
      password: "", // Don't show password
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleFormSubmit = async (values) => {
    try {
      if (isEditing) {
        // Update user
        // Filter out password if it's empty (we don't want to update it)
        const payload = { ...values };
        if (!payload.password) {
          delete payload.password;
        }
        await api.put(`/staff/${editingUserId}`, payload);
        message.success("User updated successfully");
      } else {
        // Create user
        if (!values.password) {
          form.setFields(["password"], {
            errors: ["Password is required for new users!"],
          });
          return;
        }
        await api.post("/staff", values);
        message.success("User created successfully");
      }
      setIsModalVisible(false);
      fetchUsers(); // Refresh the table
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to save user.");
    }
  };

  // --- Delete Handler ---
  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`/staff/${userId}`);
        message.success("User deleted successfully");
        fetchUsers(); // Refresh the table
      } catch (err) {
        message.error(err.response?.data?.message || "Failed to delete user.");
      }
    }
  };

  // --- NEW: Define Table Columns ---
  const columns = [
    {
      title: "Name",
      dataIndex: "first_name",
      key: "name",
      // We can combine first and last name
      render: (text, record) => `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => showEditModal(record)}>
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteUser(record.user_id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // --- RENDER ---
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Title level={2}>Manage Staff</Title>
        <Button type="primary" onClick={showCreateModal}>
          Create New User
        </Button>
      </div>

      {/* --- NEW: AntD Table --- */}
      <Table
        columns={columns}
        dataSource={users}
        loading={isLoading}
        rowKey="user_id"
      />

      {/* --- NEW: AntD Modal for Create/Edit --- */}
      <Modal
        title={isEditing ? "Edit User" : "Create New User"}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null} // We will add our own buttons in the form
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          style={{ marginTop: "20px" }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Job Title" name="job_title">
            <Input />
          </Form.Item>
          <Form.Item label="Sex" name="sex" rules={[{ required: true }]}>
            <Select>
              <Option value="other">Other</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Role" name="role" rules={[{ required: true }]}>
            <Select>
              <Option value="staff">Staff</Option>
              <Option value="manager">Manager</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={isEditing ? "New Password (optional)" : "Password"}
            name="password"
            rules={[{ required: !isEditing, message: "Password is required" }]}
          >
            <Input.Password
              placeholder={isEditing ? "Leave blank to keep same password" : ""}
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Update User" : "Create User"}
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default StaffPage;
