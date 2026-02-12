import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedRoute() {
  // Access the current user from AuthContext
  const { user } = useAuth();

  // Grab the current location to enable redirecting back after login
  const location = useLocation();

  // If user is logged in, render the nested route(s)
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
