import React from "react";
import { Navigate } from "react-router-dom";

import { checkAuthToken, removeAuthUserInfo } from "../helpers";

const RouteAuthGuard = ({ isAuthProtected, children }) => {
  const token = checkAuthToken();
  console.log(">token", token, isAuthProtected);

  if (isAuthProtected && token) {
    return <Navigate to="/restaurants" replace />;
  } else if (!isAuthProtected && token) {
    removeAuthUserInfo();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RouteAuthGuard;
