import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Import components
import InputField from "../../Components/InputLogin";
// Import package
import axios from "axios";

// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";
// Import SCSS
import "./connexion.scss";

function Connexion() {
  // Initial state
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Context
  const { setToken } = useContext(TokenContext);
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);

  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = async (evt) => {
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

  useEffect(() => {
    const refreshLogin = () => {
      if (window.localStorage.getItem("token") !== null) {
        setToken(window.localStorage.getItem("token"));
        setIsConnected(true);
      }
    };
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
            {error && (
              <p className="error_login">Les identifiants sont incorrect</p>
            )}
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
          <NavLink
            className="link_isConnected"
            to="/espace-utilisateur/mon-profil"
          >
            Accédez à votre espace utilisateur
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Connexion;
