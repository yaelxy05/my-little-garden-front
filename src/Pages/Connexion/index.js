import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Import components
import InputField from "../../Components/InputLogin";
// Import package
import axios from "axios";
import jwt_decode from "jwt-decode";
// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";
// Import SCSS
import "./connexion.scss";

function Connexion() {
  // Initial state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Context
  const { setToken } = useContext(TokenContext);
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);

  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = (evt) => {
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
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshLogin = () => {
    if (window.localStorage.getItem("token") !== null) {
      // get token user for have token expiration delay
      let token = localStorage.getItem("token");
      let decodeJwt = jwt_decode(token);
      console.log(decodeJwt.exp);
      if (window.localStorage.getItem("token") !== null) {
        setToken(window.localStorage.getItem("token"));
        setIsConnected(true);
      } else if (
        window.localStorage.getItem("token") !== null &&
        decodeJwt.exp === 0
      ) {
        window.location = "/connexion";
        localStorage.removeItem("token");
        setToken(null);
        setIsConnected(false);
      }
    }
  };
  useEffect(() => {
    refreshLogin();
  }, [isConnected]);

  return (
    <div className="login">
      {!isConnected && (
        <>
          <form onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <InputField
              name="email"
              placeholder=" "
              label="Email"
              classname="login_input login_email"
              value={formData.email}
              type="email"
              manageChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              name="password"
              placeholder=" "
              label="Mot de passe"
              classname="login_input login_password"
              value={formData.password}
              type="password"
              manageChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button className="login_button">Envoyer</button>
            <p>
              Vous n'avez pas de compte?{" "}
              <span>
                <NavLink to="/inscription">Inscrivez vous</NavLink>
              </span>{" "}
            </p>
          </form>
        </>
      )}
      {isConnected && (
        <>
          <p className="login_isconnected">Vous êtes connecté !</p>
        </>
      )}
    </div>
  );
}

export default Connexion;
