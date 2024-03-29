import React, { useContext } from "react";
// import SCSS
import "../potager.scss";
// Import Context
import {
  DeletePotagerContext,
} from "../../../../../Utils/Context/potager";


function DialogDeleteConfirm({idCarre, nameCarre}) {
  // Context
  const { deletePotager, setDeleteConfirm } =
    useContext(DeletePotagerContext);
  return (
    <div className="dialog_box">
      <div className="dialog_inner">
              <h3>Etes vous sûr de vouloir supprimer ce carré?</h3>
              <p>Nom du carré : {nameCarre}</p>
        <div className="button_confirm">
          <button
            className="button_confirm--yes"
            onClick={() => {
              deletePotager(idCarre);
            }}
          >
            Oui
          </button>
          <button
            className="button_confirm--no"
            onClick={() => {
              setDeleteConfirm(false);
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
