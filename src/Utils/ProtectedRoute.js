import { Outlet, Navigate } from "react-router-dom";

import React, { useContext } from "react";
// Import Context
import { IsConnectedContext } from "../Utils/Context";

const ProtectedRoutes = () => {
  // Context
  const { isConnected } = useContext(IsConnectedContext);

  return isConnected ? <Outlet /> : <Navigate to="/connexion" />;
};

export default ProtectedRoutes;
