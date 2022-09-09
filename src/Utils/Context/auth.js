import React, { useState, createContext, useContext, useCallback } from "react";
// Import Context
import { IsConnectedContext, TokenContext } from "./index";
import axios from "axios";
// Info API
const API_URLS = process.env.REACT_APP_API_URL;


export const LoginAuthContext = createContext();

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
  },[]);

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
      value={{ formData, setFormData, error, setError, handleLogin, refreshLogin }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
};
