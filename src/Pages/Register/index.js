import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import package
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// Import SCSS
import "./register.scss";

function Register() {
  const [successRegister, setSuccessRegister] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("L'email est requis")
      .email("L'email est invalide"),
    password: Yup.string()
      .required("Le mot de passe est requis")
      .min(8, "Le mot de passe doit avoir au minimum 8 caractères")
      .test(
        "isValidPass",
        "Le mot de passe doit contenir au moins un chiffre,une majuscules, une minuscules et un caractère spéciaux",
        (value) => {
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          const hasSymbole = /[!@#%&]/.test(value);
          let validConditions = 0;
          const numberOfMustBeValidConditions = 3;
          const conditions = [
            hasLowerCase,
            hasUpperCase,
            hasNumber,
            hasSymbole,
          ];
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          );
          if (validConditions >= numberOfMustBeValidConditions) {
            return true;
          }
          return false;
        }
      ),
    passwordConfirm: Yup.string()
      .required("La confirmation de mot de passe est requis")
      .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas"),
    firstname: Yup.string().required("Le prénom est requis"),
    lastname: Yup.string().required("Le nom est requis"),
  });

  // Function React Hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const API_URLS = process.env.REACT_APP_API_URL;

  // function for add new user on the server backend
  const onSubmit = async (data) => {
    const formDataUpload = new FormData();
    formDataUpload.append("avatar", data.avatar[0]);
    formDataUpload.append("email", data.email);
    formDataUpload.append("password", data.password);
    formDataUpload.append("firstname", data.firstname);
    formDataUpload.append("lastname", data.lastname);

    axios
      .post(`${API_URLS}/register`, formDataUpload, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        setSuccessRegister(true);
        setTimeout(() => {
          setSuccessRegister(false);
        }, 2500);
      })
      .catch((error) => {
        if (error.response.data.error.email) {
          console.log(error.response.data.error.email);
        }
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Inscription</h1>
        <div className={errors.email ? "input_box--error" : "input_box"}>
          {errors.email && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="email"
            placeholder=" "
            {...register("email")}
            name="email"
            id="email"
          />
          <label id="labelField-email" htmlFor="email">
            Email
          </label>
        </div>
        {errors.email && (
          <span className="signup__error">{errors.email.message}</span>
        )}
        <div className={errors.password ? "input_box--error" : "input_box"}>
          {errors.password && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="password"
            placeholder=" "
            {...register("password")}
            name="password"
            id="password"
          />
          <label id="labelField-password" htmlFor="password">
            Mot de passe
          </label>
        </div>
        {errors.password && (
          <span className="signup__error">{errors.password.message}</span>
        )}
        <div
          className={errors.passwordConfirm ? "input_box--error" : "input_box"}
        >
          {isValid && <i className="fas fa-check"></i>}
          {errors.passwordConfirm && (
            <i className="fas fa-exclamation-circle"></i>
          )}
          <input
            type="password"
            className={errors.passwordConfirm ? "input_error" : ""}
            placeholder=" "
            {...register("passwordConfirm")}
            name="passwordConfirm"
            id="password-confirm"
          />
          <label id="labelField-password-confirm" htmlFor="password-confirm">
            Confirmez le mot de passe
          </label>
        </div>
        {errors.passwordConfirm && (
          <span className="signup__error">
            {errors.passwordConfirm.message}
          </span>
        )}
        <div className={errors.firstname ? "input_box--error" : "input_box"}>
          {isValid && <i className="fas fa-check"></i>}
          {errors.firstname && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="text"
            className={errors.firstname ? "input_error" : ""}
            placeholder=" "
            {...register("firstname")}
            name="firstname"
            id="firstname"
          />
          <label id="labelField-firstname" htmlFor="firstname">
            Prénom
          </label>
        </div>
        {errors.firstname && (
          <span className="signup__error">{errors.firstname.message}</span>
        )}
        <div className={errors.lastname ? "input_box--error" : "input_box"}>
          {isValid && <i className="fas fa-check"></i>}
          {errors.lastname && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="text"
            placeholder=" "
            {...register("lastname")}
            name="lastname"
            id="lastname"
          />
          <label id="labelField-lastname" htmlFor="lastname">
            Nom
          </label>
        </div>
        {errors.lastname && (
          <span className="signup__error">{errors.lastname.message}</span>
        )}
        <div className="input_box">
          <input
            type="file"
            placeholder=" "
            {...register("avatar", {
              required: true,
            })}
            name="avatar"
            id="input_avatar"
            accept=".jpg,.png,.svg"
            size="20000"
          />
          <label id="labelField-avatar" htmlFor="input_avatar">
            Avatar
          </label>
        </div>

        <button className="register_button">Envoyer</button>
        {successRegister && 
          <p className="register_success">Le compte a été créer avec succés!</p>
        }
        <p>
          Vous avez déja un compte?{" "}
          <span>
            <Link to="/connexion">Connectez vous</Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
