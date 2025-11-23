// frontend/src/pages/ManageTasksPage.js
import React, { useState, useEffect, useCallback } from "react";
import api from "../api";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Space,
  message,
  Typography,
  Card, // We MUST import Card here
} from "antd";
import { formatDate } from "../utils/formatDate";
import moment from "moment";

const { Title } = Typography;
const { Option } = Select;

function ManageTasksPage({ user }) {
  const [tasks, setTasks] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [tasksRes, staffRes] = await Promise.all([
        api.get("/tasks"),
        api.get("/staff"),
      ]);
      setTasks(tasksRes.data);
      setStaffList(staffRes.data.filter((u) => u.role === "staff"));
    } catch (err) {
      message.error("Failed to fetch data.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showCreateModal = () => {
    setIsEditing(false);
    form.resetFields();
    form.setFieldsValue({ status: "pending" });
    setIsModalVisible(true);
  };

  const showEditModal = (task) => {
    setIsEditing(true);
    setEditingTaskId(task.task_id);
    form.setFieldsValue({
      ...task,
      due_date: task.due_date ? moment(task.due_date) : null,
      assigned_to: task.assigned_to,
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        due_date: values.due_date ? values.due_date.toISOString() : null,
      };

      if (isEditing) {
        await api.put(`/tasks/${editingTaskId}`, payload);
        message.success("Task updated successfully");
      } else {
        await api.post("/tasks", payload);
        message.success("Task assigned successfully");
      }
      setIsModalVisible(false);
      fetchData();
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to save task.");
    }
  };

  const handleDelete = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await api.delete(`/tasks/${taskId}`);
        message.success("Task deleted successfully");
        fetchData();
      } catch (err) {
        message.error(err.response?.data?.message || "Failed to delete task.");
      }
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Assigned To",
      dataIndex: "assigned_to_username",
      key: "assigned_to_username",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
      render: (text) => formatDate(text, user.date_format),
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
            onClick={() => handleDelete(record.task_id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // --- RENDER ---
  return (
    // This <Card> is the fix that wraps the whole page
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
          Manage Tasks
        </Title>
        <Button type="primary" onClick={showCreateModal}>
          Assign New Task
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={tasks}
        loading={isLoading}
        rowKey="task_id"
      />

      <Modal
        title={isEditing ? "Edit Task" : "Assign New Task"}
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
            label="Task Title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Assign To"
            name="assigned_to"
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

          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select>
              <Option value="pending">Pending</Option>
              <Option value="in_progress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Due Date" name="due_date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Update Task" : "Assign Task"}
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default ManageTasksPage;
