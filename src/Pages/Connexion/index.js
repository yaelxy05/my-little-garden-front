import React, { useState, useContext, useEffect } from "react";
// Import components
import InputField from "../../Components/Input";
// Import package
import axios from "axios";
// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";

function Connexion() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { token, setToken } = useContext(TokenContext);
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);

  const API_URL = "http://127.0.0.1:8000/api/login";
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData(formData);
    axios
      .post(`${API_URL}`, {
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
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              name="email"
              placeholder="email"
              classname="login_email"
              value={formData.email}
              placeholder="email"
              type="email"
              manageChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              name="password"
              placeholder="Mot de passe"
              classname="login_password"
              value={formData.password}
              placeholder="Mot de passe"
              type="password"
              manageChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button>Envoyer</button>
          </form>
        </>
      )}
      {isConnected && (
        <>
          <p>Vous êtes connecté !</p>
        </>
      )}
    </div>
  );
}

export default Connexion;
