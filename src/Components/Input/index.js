import React from "react";

function Input({ name, type, classname, label, manageChange, value, placeholder }) {
  const inputId = `labelField-${name}`;
  const classId = `target-${name}`

  return (
    <div className="input_box">
        <input
          type={type}
          onChange={manageChange}
          className={classname}
          placeholder={placeholder}
          value={value}
          name={name}
          id={classId}
        />
       <label htmlFor={classId} id={ inputId } >{label}</label>
    </div>
  );
}

export default Input;
