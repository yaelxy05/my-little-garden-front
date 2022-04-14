import React from "react";

function InputSelectMyGarden({
  name,
  type,
  classname,
  label,
  manageChangeSelect,
  value,
  placeholder,
  errors,
}) {
  const inputId = `labelField-${name}`;
  return (
    <div className={errors ? " input_box--error" : " input_box"}>
      <select
        value={value}
        name={name}
        onChange={manageChangeSelect}
        className={classname}
        placeholder={placeholder}
        type={type}
      >
        <option value="33">3 X 3</option>
        <option value="24">2 X 4</option>
        <option value="25">2 X 5</option>
        <option value="35">3 X 5</option>
      </select>
      <label id={inputId}>{label}</label>
    </div>
  );
}

export default InputSelectMyGarden;
