import React, { useState, useEffect } from "react";
import { List, Card, Typography, Select, Tag, message, Spin, Space } from "antd";
import api from "../api";
import { formatDate } from "../utils/formatDate";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const STATUS_COLORS = {
  completed: "green",
  in_progress: "orange",
  pending: "blue",
};

function MyTasksPage({ user }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyTasks = async () => {
      try {
        const response = await api.get("/tasks/mytasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        message.error("Failed to load tasks");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyTasks();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await api.patch(`/tasks/${taskId}/status`, { status: newStatus });
      message.success("Task status updated");
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task_id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
      message.error("Failed to update status");
    }
  };

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>My Tasks</Title>

      <Spin spinning={isLoading}>
        <List
          itemLayout="vertical"
          dataSource={tasks}
          locale={{ emptyText: "You have no tasks assigned to you" }}
          renderItem={(task) => (
            <List.Item
              key={task.task_id}
              actions={[
                <Space key="status">
                  <Text strong>Status:</Text>
                  <Select
                    value={task.status}
                    style={{ width: 120 }}
                    onChange={(value) => handleStatusChange(task.task_id, value)}
                  >
                    <Option value="pending">Pending</Option>
                    <Option value="in_progress">In Progress</Option>
                    <Option value="completed">Completed</Option>
                  </Select>
                </Space>,
              ]}
            >
              <List.Item.Meta
                title={<Title level={4}>{task.title}</Title>}
                description={`Assigned by: ${task.assigned_by_username} | Due: ${formatDate(task.due_date, user.date_format)}`}
              />
              <Paragraph>{task.description || "No description"}</Paragraph>
              <Tag color={STATUS_COLORS[task.status]}>
                {task.status.replace("_", " ").toUpperCase()}
              </Tag>
            </List.Item>
          )}
        />
      </Spin>
    </Card>
  );
}

export default MyTasksPage;
