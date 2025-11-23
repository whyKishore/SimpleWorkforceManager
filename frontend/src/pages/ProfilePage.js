// frontend/src/pages/ProfilePage.js

import React, { useState, useEffect, useCallback } from "react"; // NEW: Import useCallback
import api from "../api";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Card,
  Descriptions,
  message,
  Space,
  Spin,
} from "antd"; // NEW: Removed 'Title'
import moment from "moment";

const { Option } = Select;

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [form] = Form.useForm();

  // NEW: Wrap fetchProfile in useCallback
  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/profile/me");

      const fetchedData = {
        ...res.data,
        hire_date: res.data.hire_date ? moment(res.data.hire_date) : null,
      };

      setProfile(fetchedData);
      form.setFieldsValue(fetchedData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      message.error("Failed to load profile");
    }
  }, [form]); // form is a dependency

  // NEW: Add fetchProfile to the dependency array
  useEffect(() => {
    if (!isEditing) {
      fetchProfile();
    }
  }, [isEditing, fetchProfile]); // Was [isEditing, form]

  // --- Handle Form Submit ---
  const handleSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        hire_date: values.hire_date ? values.hire_date.toISOString() : null,
      };

      await api.put("/profile/me", payload);

      setProfile((prevProfile) => ({
        ...prevProfile,
        ...values,
      }));

      message.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to update profile.";
      message.error(errorMsg);
      console.error(err);
    }
  };

  const handleCancel = () => {
    form.setFieldsValue(profile);
    setIsEditing(false);
  };

  if (isLoading) {
    return <Spin tip="Loading profile..." size="large" />;
  }

  // --- RENDER ---

  if (isEditing) {
    return (
      <Card title="Edit Profile">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={profile}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Username is required" },
              { min: 3, message: "Username must be at least 3 characters" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
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
          <Form.Item label="Sex" name="sex" rules={[{ required: true }]}>
            <Select>
              <Option value="other">Other</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Job Title" name="job_title">
            <Input />
          </Form.Item>
          <Form.Item label="Hire Date" name="hire_date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    );
  }

  return (
    <Card
      title="My Profile"
      extra={
        <Button type="primary" onClick={() => setIsEditing(true)}>
          Edit Profile
        </Button>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Username">
          {profile.username}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{profile.email}</Descriptions.Item>
        <Descriptions.Item label="First Name">
          {profile.first_name || "Not set"}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {profile.last_name || "Not set"}
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {profile.phone_number || "Not set"}
        </Descriptions.Item>
        <Descriptions.Item label="Sex">{profile.sex}</Descriptions.Item>
        <Descriptions.Item label="Job Title">
          {profile.job_title || "Not set"}
        </Descriptions.Item>
        <Descriptions.Item label="Hire Date">
          {profile.hire_date && moment.isMoment(profile.hire_date)
            ? profile.hire_date.format("MM/DD/YYYY")
            : "Not set"}
        </Descriptions.Item>
        <Descriptions.Item label="Address">
          {profile.address || "Not set"}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default ProfilePage;
