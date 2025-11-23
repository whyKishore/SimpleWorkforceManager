import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Layout, Menu, Typography, Avatar, Button, Space } from "antd";
import api from "./api";
import { connectSocket, disconnectSocket } from "./socket";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import MyTasksPage from "./pages/MyTasksPage";
import StaffPage from "./pages/StaffPage";
import AttendancePage from "./pages/AttendancePage";
import ReportsPage from "./pages/ReportsPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import FeedbackPage from "./pages/FeedbackPage";
import ManageAllowancesPage from "./pages/ManageAllowancesPage";
import ManageTasksPage from "./pages/ManageTasksPage";
import ChatPage from "./pages/ChatPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import SubmitReportPage from "./pages/SubmitReportPage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import SubmitFeedbackPage from "./pages/SubmitFeedbackPage";
import MyAllowancesPage from "./pages/MyAllowancesPage";
import MyComplaintsPage from "./pages/MyComplaintsPage";
import MyFeedbackPage from "./pages/MyFeedbackPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import PerformResetPage from "./pages/PerformResetPage";
import SettingsPage from "./pages/SettingsPage";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    disconnectSocket();
  }, []);

  const fetchUserProfile = useCallback(async () => {
    try {
      const res = await api.get("/profile/me");
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch profile", err);
      handleLogout();
    }
  }, [handleLogout]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      connectSocket(storedToken);
      fetchUserProfile();
    }
    setIsLoading(false);
  }, [fetchUserProfile]);

  const handleLogin = async (userToken) => {
    try {
      localStorage.setItem("token", userToken);
      connectSocket(userToken);
      await fetchUserProfile();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (user?.is_default_password) return <ResetPasswordPage onPasswordReset={handleLogout} />;

  const buildMenuItems = () => {
    const baseLinks = [
      { key: "/", label: <Link to="/">Dashboard</Link> },
      { key: "/chat", label: <Link to="/chat">Chat</Link> },
      { key: "/profile", label: <Link to="/profile">My Profile</Link> },
      { key: "/settings", label: <Link to="/settings">Settings</Link> },
    ];

    if (!user) return baseLinks;

    const roleLinks = {
      staff: [{ key: "/tasks", label: <Link to="/tasks">My Tasks</Link> }],
      manager: [
        { key: "/attendance", label: <Link to="/attendance">View Attendance</Link> },
        { key: "/reports", label: <Link to="/reports">View Reports</Link> },
        { key: "/manage-allowances", label: <Link to="/manage-allowances">Manage Allowances</Link> },
        { key: "/manage-tasks", label: <Link to="/manage-tasks">Manage Tasks</Link> },
        { key: "/complaints", label: <Link to="/complaints">View Complaints</Link> },
        { key: "/feedback", label: <Link to="/feedback">View Feedback</Link> },
      ],
      admin: [
        { key: "/staff", label: <Link to="/staff">Manage Staff</Link> },
        { key: "/complaints", label: <Link to="/complaints">View Complaints</Link> },
        { key: "/feedback", label: <Link to="/feedback">View Feedback</Link> },
      ],
    };

    return [...(roleLinks[user.role] || []), ...baseLinks];
  };

  const menuItems = buildMenuItems();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {user && (
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title level={4} style={{ color: "white", margin: 0, lineHeight: 1 }}>
            SWM
          </Title>

          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ flex: 1, minWidth: 0, justifyContent: "center" }}
          />

          <Space>
            <Avatar style={{ backgroundColor: "#f56a00" }}>
              {user.first_name
                ? user.first_name.charAt(0)
                : user.username.charAt(0)}
            </Avatar>
            <Text style={{ color: "white" }}>
              {user.first_name
                ? `${user.first_name} (${user.username})`
                : user.username}
            </Text>
            <Button type="primary" ghost onClick={handleLogout}>
              Logout
            </Button>
          </Space>
        </Header>
      )}

      <Content style={{ padding: "24px 48px" }}>
        <Routes>
          {!user ? (
            // If NOT logged in
            <>
              <Route
                path="/login"
                element={<Login onLoginSuccess={handleLogin} />}
              />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="/reset-password/:token"
                element={<PerformResetPage />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            // If LOGGED IN
            <>
              <Route path="/" element={<DashboardPage user={user} />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/settings"
                element={
                  <SettingsPage
                    user={user}
                    onSettingsUpdate={fetchUserProfile}
                  />
                }
              />
              <Route path="/chat" element={<ChatPage currentUser={user} />} />

              {/* Staff Routes */}
              <Route path="/tasks" element={<MyTasksPage user={user} />} />
              <Route
                path="/my-allowances"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <MyAllowancesPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-complaints"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <MyComplaintsPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-feedback"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <MyFeedbackPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/submit-report"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <SubmitReportPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/submit-complaint"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <SubmitComplaintPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/submit-feedback"
                element={
                  <ProtectedRoute user={user} allowedRoles={["staff"]}>
                    <SubmitFeedbackPage />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/staff"
                element={
                  <ProtectedRoute user={user} allowedRoles={["admin"]}>
                    <StaffPage user={user} />
                  </ProtectedRoute>
                }
              />

              {/* Manager Routes */}
              <Route
                path="/attendance"
                element={
                  <ProtectedRoute user={user} allowedRoles={["manager"]}>
                    <AttendancePage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute user={user} allowedRoles={["manager"]}>
                    <ReportsPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-allowances"
                element={
                  <ProtectedRoute user={user} allowedRoles={["manager"]}>
                    <ManageAllowancesPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-tasks"
                element={
                  <ProtectedRoute user={user} allowedRoles={["manager"]}>
                    <ManageTasksPage user={user} />
                  </ProtectedRoute>
                }
              />

              {/* Admin/Manager Routes */}
              <Route
                path="/complaints"
                element={
                  <ProtectedRoute
                    user={user}
                    allowedRoles={["admin", "manager"]}
                  >
                    <ComplaintsPage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/feedback"
                element={
                  <ProtectedRoute
                    user={user}
                    allowedRoles={["admin", "manager"]}
                  >
                    <FeedbackPage user={user} />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
