import React, { useState, useContext, useEffect } from "react";
// Import components
import InputField from "../../Components/Input";
// Import package
import axios from "axios";
// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";
// Import SCSS
import './connexion.scss';

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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const refreshLogin = () => {
    if (localStorage.getItem("token") !== null) {
      setToken(localStorage.getItem("token"));
      setIsConnected(true);
    }
  };
  useEffect(() => {
    refreshLogin();
  }, []);

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
            <p>Vous n'avez pas de compte? <span>Inscrivez vous</span> </p>
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
