import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
// Import components
import InputField from "../../../../Components/InputMyGarden";
// import SCSS
import "./potagerForm.scss";
// Import PotagerPlant
import PotagerPlant from "./PotagerPlant";
// Import Context
import {
  HandleSubmitCreatePotagerContext,
  GetDataPotagerContext,
} from "../../../../Utils/Context/potager";
import { IsConnectedContext } from "../../../../Utils/Context";

function PotagerForm() {
  // Context
  const {
    HandleSubmitCreatePotager,
    formDataPotager,
    setFormDataPotager,
    sucess,
  } = useContext(HandleSubmitCreatePotagerContext);
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  const { isConnected } = useContext(IsConnectedContext);

  useEffect(() => {
    if (isConnected) {
      fetchDataPotager();
    } else {
      return null
    }
    
  }, []);

  return (
    <div className="potager_form">
      <div className="potager_addCarre">
        <form onSubmit={HandleSubmitCreatePotager}>
          <h1>Ajout d'un carré de potager</h1>
          <InputField
            name="name"
            placeholder=" "
            label="Nom du carré"
            classname="addCarre_input"
            value={formDataPotager.name}
            type="text"
            manageChange={(e) =>
              setFormDataPotager({ ...formDataPotager, name: e.target.value })
            }
          />
          <div className={"input_box"}>
            <label>Taille du carré</label>
            <select
              value={formDataPotager.size}
              name="size"
              onChange={(e) =>
                setFormDataPotager({
                  ...formDataPotager,
                  size: parseInt(e.target.value, 10),
                })
              }
              className="addCarre_input"
              placeholder=" "
              type="select"
            >
              <option value={33}>3 X 3</option>
              <option value={24}>2 X 4</option>
              <option value={25}>2 X 5</option>
              <option value={35}>3 X 5</option>
            </select>
          </div>
          <div className="addCarre_box">
            <button className="addCarre_button">Ajouter</button>
          </div>
          {sucess && (
            <div className="message_sucess--box">
              <p className="message_sucess">Le carré a bien été ajouté</p>
            </div>
          )}
        </form>
      </div>
      <PotagerPlant />
    </div>
  );
}

PotagerForm.prototypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  HandleSubmitCreatePotager: PropTypes.func.isRequired,
};

export default PotagerForm;
