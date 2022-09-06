import React, { useState, createContext, useEffect } from "react";
import axios from "axios";


export const IsConnectedContext = createContext();
export const TokenContext = createContext();
export const GetDataPotagerContext = createContext();

export const IsConnectedProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
 
    return (
        <IsConnectedContext.Provider value={{ isConnected, setIsConnected }}>
            {children}
        </IsConnectedContext.Provider>
    )

}

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);
 
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )

}

export const GetDataPotagerProvider = ({ children }) => {
    const [listPotager, setListPotager] = useState([]);
    const token = localStorage.getItem("token");
    const API_URLS = process.env.REACT_APP_API_URL;

    const fetchDataPotager = () => {
        axios
            .get(`${API_URLS}/potager`, {
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                setListPotager(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchDataPotager();
    }, []);
    
    return (
        <GetDataPotagerContext.Provider value={{ listPotager, setListPotager, fetchDataPotager }}>
            {children}
        </GetDataPotagerContext.Provider>
    )
}
