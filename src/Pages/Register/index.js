import React, { useState, useContext, useEffect } from "react";
// Import components
import InputField from "../../Components/Input";
// Import package
import axios from "axios";
// Import SCSS
import './register.scss';

function Register() {
  // Initial state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    firstname: "",
    lastname: "",
  });

  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData(formData);
    axios
      .post(`${API_URLS}/register`, {
        username: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
        firstname: formData.firstname,
        lastname: formData.lastname,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        <InputField
          name="email"
          placeholder=" "
          label="Email"
          classname="register_input register_email"
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
          classname="register_input register_password"
          value={formData.password}
          type="password"
          manageChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <InputField
          name="password-confirm"
          placeholder=" "
          label="confirmez le mot de passe"
          classname="register_input register_password"
          value={formData.passwordConfirm}
          type="password"
          manageChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <InputField
          name="firstname"
          placeholder=" "
          label="prénom"
          classname="register_input register_firstname"
          value={formData.firstname}
          type="text"
          manageChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <InputField
          name="lastname"
          placeholder=" "
          label="nom"
          classname="register_input register_lastname"
          value={formData.lastname}
          type="email"
          manageChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <button className="register_button">Envoyer</button>
        <p>
          Vous avez déja un compte? <span>Connectez vous</span>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
