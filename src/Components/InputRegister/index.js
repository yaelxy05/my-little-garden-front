import React from "react";

function Input({ name, type, success, label, manageChange, value, placeholder, errors }) {
  const inputId = `labelField-${name}`;

  return (
    <div className={errors ? " input_box--error" : " input_box"}>
      {success &&  (<i className="fas fa-check"></i>)}
      {errors && (<i className="fas fa-exclamation-circle"></i>)}
        <input
          type={type}
          onChange={manageChange}
          className={success ? "register_input--success" : ""}
          placeholder={placeholder}
          value={value}
          name={name}
        />
       <label id={ inputId } >{label}</label>
    </div>
  );
}

export default Input;
