import React from "react";

function Input({ name, type, classname, label, manageChange, value, placeholder, errors }) {
  const inputId = `labelField-${name}`;

  return (
    <div className={errors ? " input_box--error" : " input_box"}>
        <input
          type={type}
          onChange={manageChange}
          className={classname}
          placeholder={placeholder}
          value={value}
          name={name}
        />
       <label id={ inputId } >{label}</label>
    </div>
  );
}

export default Input;
