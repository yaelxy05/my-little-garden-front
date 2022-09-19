import React, { useContext } from "react";
// import SCSS
import "../potager.scss";
// Import Context
import {
  DeletePlantContext,
} from "../../../../../Utils/Context/potager";


function DialogDeleteConfirm({idPlant, namePlant}) {
  // Context
  const { deletePlant, deleteConfirmPlant, setDeleteConfirmPlant } =
    useContext(DeletePlantContext);
  return (
    <div className="dialog_box">
      <div className="dialog_inner">
              <h3>Etes vous sûr de vouloir supprimer ce plant?</h3>
              <p>Nom du plant : {namePlant}</p>
        <div className="button_confirm">
          <button
            className="button_confirm--yes"
            onClick={() => {
              deletePlant(idPlant);
            }}
          >
            Oui
          </button>
          <button
            className="button_confirm--no"
            onClick={() => {
              setDeleteConfirmPlant(false);
            }}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteConfirm;
