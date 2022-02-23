import React, { useState, createContext } from "react";

export const IsConnectedContext = createContext();
export const TokenContext = createContext();

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
