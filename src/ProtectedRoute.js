import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const auth = useAuth();
  if (!auth.isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;

