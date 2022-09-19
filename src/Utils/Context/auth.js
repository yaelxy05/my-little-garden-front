import React, { useState, createContext, useContext, useCallback } from "react";
// Import Context
import { IsConnectedContext, TokenContext } from "./index";
import axios from "axios";
// Info API
const API_URLS = process.env.REACT_APP_API_URL;

export const LoginAuthContext = createContext();
export const UserAccountDeleteContext = createContext();

export const UserAccountDeleteProvider = ({ children }) => {
  // state
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  // Context
  const { setToken } = useContext(TokenContext);
  const { setIsConnected } = useContext(IsConnectedContext);

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${API_URLS}/user/delete`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setDeleteConfirm(false);
        window.location = "/connexion";

        setIsConnected(false);
        localStorage.removeItem("token");
        setToken(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserAccountDeleteContext.Provider
      value={{ handleDeleteAccount, deleteConfirm, setDeleteConfirm }}
    >
      {children}
    </UserAccountDeleteContext.Provider>
  );
};

export const LoginAuthProvider = ({ children }) => {
  // Context
  const { setToken } = useContext(TokenContext);
  const { setIsConnected } = useContext(IsConnectedContext);
  // Initial state
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const refreshLogin = useCallback(() => {
    if (window.localStorage.getItem("token") !== null) {
      setToken(window.localStorage.getItem("token"));
      setIsConnected(true);
    }
  }, []);

  const handleLogin = (evt) => {
    evt.preventDefault();
    setFormData(formData);
    axios
      .post(`${API_URLS}/login`, {
        username: formData.email,
        password: formData.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setIsConnected(true);
      })
      .catch((error) => {
        console.log(error.code);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2500);
      });
  };

  return (
    <LoginAuthContext.Provider
      value={{
        formData,
        setFormData,
        error,
        setError,
        handleLogin,
        refreshLogin,
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
};
