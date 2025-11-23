// frontend/src/pages/ManageAllowancesPage.js

import React, { useState, useEffect, useCallback } from "react";
import api from "../api";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Space,
  message,
  Typography,
  Card,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

function ManageAllowancesPage({ user }) {
  const [allowances, setAllowances] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAllowanceId, setEditingAllowanceId] = useState(null);
  const [form] = Form.useForm();

  const [currencySymbol, setCurrencySymbol] = useState("$");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      let tempCurrency = "$";
      if (user && (user.role === "admin" || user.role === "manager")) {
        const settingsRes = await api.get("/settings");

        // --- THIS IS THE FIX ---
        // We must check if settingsRes.data.system is not null
        if (
          settingsRes.data.system &&
          settingsRes.data.system.currency_symbol
        ) {
          // --- END FIX ---
          tempCurrency = settingsRes.data.system.currency_symbol;
        }
      }
      setCurrencySymbol(tempCurrency);

      const [allowancesRes, staffRes] = await Promise.all([
        api.get("/allowances/all"),
        api.get("/staff"),
      ]);

      setAllowances(allowancesRes.data);
      setStaffList(staffRes.data.filter((u) => u.role === "staff"));
    } catch (err) {
      message.error("Failed to fetch data.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [user]); // Use the 'user' object as the dependency

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showCreateModal = () => {
    setIsEditing(false);
    form.resetFields();
    form.setFieldsValue({ frequency: "one-time" });
    setIsModalVisible(true);
  };

  const showEditModal = (allowance) => {
    setIsEditing(true);
    setEditingAllowanceId(allowance.allowance_id);
    form.setFieldsValue({
      ...allowance,
      user_id: allowance.user_id,
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (isEditing) {
        await api.put(`/allowances/${editingAllowanceId}`, values);
        message.success("Allowance updated successfully");
      } else {
        await api.post("/allowances", values);
        message.success("Allowance created successfully");
      }
      setIsModalVisible(false);
      fetchData(); // Refresh the table
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to save allowance.");
    }
  };

  const handleDelete = async (allowanceId) => {
    if (window.confirm("Are you sure you want to delete this allowance?")) {
      try {
        await api.delete(`/allowances/${allowanceId}`);
        message.success("Allowance deleted successfully");
        fetchData(); // Refresh list
      } catch (err) {
        message.error(
          err.response?.data?.message || "Failed to delete allowance.",
        );
      }
    }
  };

  const columns = [
    {
      title: "User",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `${currencySymbol}${Number(amount).toFixed(2)}`,
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
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
            onClick={() => handleDelete(record.allowance_id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Manage Allowances
        </Title>
        <Button type="primary" onClick={showCreateModal}>
          Create New Allowance
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={allowances}
        loading={isLoading}
        rowKey="allowance_id"
      />

      <Modal
        title={isEditing ? "Edit Allowance" : "Create New Allowance"}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          style={{ marginTop: "20px" }}
        >
          <Form.Item
            label="Assign To"
            name="user_id"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select a staff member">
              {staffList.map((staff) => (
                <Option key={staff.user_id} value={staff.user_id}>
                  {staff.first_name} {staff.last_name} ({staff.username})
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input placeholder="e.g., Phone Bill" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
            <InputNumber
              style={{ width: "100%" }}
              addonBefore={currencySymbol}
              step="0.01"
            />
          </Form.Item>

          <Form.Item
            label="Frequency"
            name="frequency"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="one-time">One-time</Option>
              <Option value="monthly">Monthly</Option>
              <Option value="quarterly">Quarterly</Option>
              <Option value="annual">Annual</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Update Allowance" : "Create Allowance"}
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default ManageAllowancesPage;
