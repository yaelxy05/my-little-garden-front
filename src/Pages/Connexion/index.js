import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Import components
import InputField from "../../Components/InputLogin";
// Import Context
import { IsConnectedContext } from "../../Utils/Context";
import { LoginAuthContext } from "../../Utils/Context/auth";
// Import SCSS
import "./connexion.scss";

function Connexion() {
  const { formData, setFormData, error, handleLogin } =
    useContext(LoginAuthContext);
  const { isConnected } = useContext(IsConnectedContext);
  
  return (
    <div className="login">
      {!isConnected && (
        <>
          <form onSubmit={handleLogin}>
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
              Vous n'avez pas de compte?
              <span>
                <NavLink to="/inscription">Inscrivez vous</NavLink>
              </span>
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
