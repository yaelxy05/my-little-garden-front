import { Route, Routes } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
// Import scss
import "./App.scss";
// Import Page
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Calendar from "../Calendar";
import Connexion from "../Connexion";
import Register from "../Register";
import UserSpace from "../SpaceUser";
import Header from "../../Components/Header";
import Profil from "../SpaceUser/Profil";
import ListSemis from "../SpaceUser/ListSemis";
import AddSemis from "../SpaceUser/AddSemis";
import MyGarden from "../SpaceUser/MyGarden";
import ProtectedRoute from "../../Utils/ProtectedRoute";
// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";

function App() {
  // Context
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);
  const { setToken } = useContext(TokenContext);

  const refreshLogin = () => {
    if (window.localStorage.getItem("token") !== null) {
      setToken(window.localStorage.getItem("token"));
      setIsConnected(true);
    }
  };
  useEffect(() => {
    refreshLogin();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/espace-utilisateur" element={<UserSpace />}>
            <Route path="/espace-utilisateur/mon-profil" element={<Profil />} />
            <Route
              path="/espace-utilisateur/liste-semis"
              element={<ListSemis />}
            />
            <Route
              path="/espace-utilisateur/add-semis"
              element={<AddSemis />}
            />
            <Route
              path="/espace-utilisateur/mon-potager"
              element={<MyGarden />}
            />
          </Route>
        </Route>

        <Route path="/" element={<Header />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
