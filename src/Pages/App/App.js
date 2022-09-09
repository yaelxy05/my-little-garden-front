import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";

// Import package
import axios from "axios";
// Import scss
import "./App.scss";
// Import Page
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Calendar from "../Calendar";
import Connexion from "../Connexion";
import Register from "../Register";
import UserSpace from "../SpaceUser";
import Home from "../Home";
import Profil from "../SpaceUser/Profil";
import ListSemis from "../SpaceUser/ListSemis";
import AddSemis from "../SpaceUser/AddSemis";
import MyGarden from "../SpaceUser/MyGarden";
import Page404 from "../404";
// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";
import { LoginAuthContext } from "../../Utils/Context/auth";


function App() {
  // Context
  const { setIsConnected } = useContext(IsConnectedContext);
  const { setToken } = useContext(TokenContext);
  const { refreshLogin } = useContext(LoginAuthContext);

  
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if ("Expired JWT Token" === error.response.data.message) {
        // handle error: inform user, go to login, etc
        window.location = "/connexion";
        localStorage.removeItem("token");
        setToken(null);
        setIsConnected(false);
      } else {
        return Promise.reject(error);
      }
    }
  );
    
  
  useEffect(() => {
    refreshLogin();
  }, [refreshLogin]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Register />} />

        <Route path="/espace-utilisateur" element={<UserSpace />}>
          <Route path="/espace-utilisateur/mon-profil" element={<Profil />} />
          <Route
            path="/espace-utilisateur/liste-semis"
            element={<ListSemis />}
          />
          <Route path="/espace-utilisateur/add-semis" element={<AddSemis />} />
          <Route
            path="/espace-utilisateur/mon-potager"
            element={<MyGarden />}
          />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
