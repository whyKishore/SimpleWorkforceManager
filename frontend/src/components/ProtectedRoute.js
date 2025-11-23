// frontend/src/components/ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, allowedRoles, children }) {
  // 1. Check if user is logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Check if user's role is in the allowed list
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // 3. THIS IS THE FIX:
  // We must "clone" the child component and inject the 'user' prop into it.
  return React.cloneElement(children, { user: user });
}

export default ProtectedRoute;
