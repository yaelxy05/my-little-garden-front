import React, { useRef } from "react";
import { Link } from "react-router-dom";
// Import components
import InputField from "../../Components/InputRegister";
// Import package
import axios from "axios";
import { useForm } from "react-hook-form";

// Import SCSS
import "./register.scss";

function Register() {
  // Function React Hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm({
    mode: "onTouched",
  });
  console.log(errors);
  console.log(isValid);
  console.log(isDirty);
  const password = useRef({});
  password.current = watch("password", "");

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
        <div className="input_box">
          {isValid && <i className="fas fa-check"></i>}
          {errors.email && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="email"
            className={errors.email ? "input_error" : "" || isValid ? "register_input--success" : ""}
            placeholder=" "
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'adresse email est invalide",
              },
              maxLength: {
                value: 49,
                message: "Le mot de passe doit avoir au maximum 49 caractères",
              },
            })}
            name="email"
            id="email"
          />
          <label id="labelField-email" htmlFor="email">
            Email
          </label>
          {errors.email && (
            <span className="signup__error">{errors.email.message}</span>
          )}
        </div>

        <div className="input_box">
          {isValid && <i className="fas fa-check"></i>}
          {errors.password && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="password"
            className={errors.password ? "input_error" : "" || isValid ? "register_input--success" : ""}
            placeholder=" "
            {...register("password", {
              required: "Le mot de passe est requis",
              minLength: {
                value: 8,
                message: "Le mot de passe doit avoir au minimum 8 caractères",
              },
            })}
            name="password"
            id="password"
          />
          <label id="labelField-password" htmlFor="password">
            Mot de passe
          </label>
          {errors.password && (
            <span className="signup__error">{errors.password.message}</span>
          )}
        </div>
        <div className="input_box">
          {isValid && <i className="fas fa-check"></i>}
          {errors.passwordConfirm && (
            <i className="fas fa-exclamation-circle"></i>
          )}
          <input
            type="password"
            className={errors.passwordConfirm ? "input_error" : "" || isValid ? "register_input--success" : ""}
            placeholder=" "
            {...register("passwordConfirm", {
              required: "La confirmation de mot de passe est requis",
              minLength: {
                value: 8,
                message: "Le mot de passe doit avoir au minimum 8 caractères",
              },
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            name="passwordConfirm"
            id="password-confirm"
          />
          <label id="labelField-password-confirm" htmlFor="password-confirm">
            Confirmez le mot de passe
          </label>
          {errors.passwordConfirm && (
            <span className="signup__error">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>
        <div className="input_box">
          {isValid && <i className="fas fa-check"></i>}
          {errors.firstname && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="text"
            className={errors.firstname ? "input_error" : "" || isValid ? "register_input--success" : ""}
            placeholder=" "
            {...register("firstname", {
              required: "Le prénom est requis",
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[^a-zA-Z]/].every((pattern) =>
                    pattern.test(value)
                  ) ||
                  "Le prénom ne peut avoir que des minuscules et des majuscules"
                );
              },
            })}
            name="firstname"
            id="firstname"
          />
          <label id="labelField-firstname" htmlFor="firstname">
            Prénom
          </label>
          {errors.firstname && (
            <span className="signup__error">{errors.firstname.message}</span>
          )}
        </div>
        <div className="input_box">
          {isValid && <i className="fas fa-check"></i>}
          {errors.lastname && <i className="fas fa-exclamation-circle"></i>}
          <input
            type="text"
            className={errors.lastname ? "input_error" : "" || isValid ? "register_input--success" : ""}
            placeholder=" "
            {...register("lastname", {
              required: "Le nom est requis",
            })}
            name="lastname"
            id="lastname"
          />
          <label id="labelField-lastname" htmlFor="lastname">
            Nom
          </label>
          {errors.lastname && (
            <span className="signup__error">{errors.lastname.message}</span>
          )}
        </div>
        <div className="input_box">
          <input
            type="file"
            //className={success ? "register_input--success" : ""}
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
