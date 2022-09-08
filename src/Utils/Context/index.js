import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
// info API
const API_URLS = process.env.REACT_APP_API_URL;

export const IsConnectedContext = createContext();
export const TokenContext = createContext();
export const InfoUserContext = createContext();

export const IsConnectedProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <IsConnectedContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </IsConnectedContext.Provider>
  );
};

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const InfoUserProvider = ({ children }) => {
  // Context
  const { isConnected } = useContext(IsConnectedContext);
  // Initial state
  const [loading, setLoading] = useState(true);
  const [formDataUser, setFormDataUser] = useState({
    firstname: "",
    lastname: "",
    avatar: "",
  });
  const getInfoUser = async () => {
    const token = localStorage.getItem("token");

    await axios
      .get(`${API_URLS}/users`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setFormDataUser(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isConnected) {
      console.log("modifié");
      getInfoUser();
    } else {
      return null;
    }
  }, []);

  return (
    <InfoUserContext.Provider
      value={{
        loading,
        getInfoUser,
        formDataUser,
        setFormDataUser,
        setLoading,
      }}
    >
      {children}
    </InfoUserContext.Provider>
  );
};
