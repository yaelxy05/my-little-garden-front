import React from "react";

function Input({ size, id, name, type, success, label, manageChange, value, placeholder, errors, accept}) {
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
        id={id}
        name={name}
        accept={accept}
        size={size}
        />
       <label id={ inputId } >{label}</label>
    </div>
  );
}

export default Input;
