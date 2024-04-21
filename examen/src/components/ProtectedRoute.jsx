import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Import useAuth from the context you've created

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
