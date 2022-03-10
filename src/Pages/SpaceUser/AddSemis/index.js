import React from "react";
// Import components
import InputField from "../../../Components/InputRegister";
// Import css
import "./addSemis.scss";

function AddSemis() {
  return (
    <div className="addSemis">
      <div className="addSemis--box">
        <form>
          <div className="addSemis--title">
            <h1>Ajout de semis</h1>
          </div>
          <InputField
            name="variete"
            label="Variété"
            placeholder=" "
            type="text"
          />
          <InputField
            name="famille"
            label="Famille"
            placeholder=" "
            type="text"
          />
          <InputField
            name="date-semis"
            label="Date du semis"
            placeholder=" "
            type="text"
          />
          <button className="addSemis_button">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default AddSemis;
