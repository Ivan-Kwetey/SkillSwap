import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  // Access the current user from AuthContext
  const { user } = useAuth();

  // Grab the current location to enable redirecting back after login
  const location = useLocation();

  // If user is logged in, render the nested route(s)
  if (user) {
    return <Outlet />;
  }

  // If user is NOT logged in, redirect to login page
  // Pass current location so user can be redirected back after successful login
  return <Navigate to="/login" state={{ from: location }} replace />;
}
