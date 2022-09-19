import React, { useContext } from "react";
// Import Context
import {
  GetDataPotagerContext,
  DeletePotagerContext,
} from "../../../../Utils/Context/potager";

function dialogDeleteConfirm() {
  // Context
  const { listPotager, fetchDataPotager } = useContext(GetDataPotagerContext);
  const { deletePotager, deleteConfirm, setDeleteConfirm } =
    useContext(DeletePotagerContext);
  return (
    <div className="dialog_box">
      <div className="dialog_inner">
        <h3>êtes vous sur de vouloir supprimer ce carré?</h3>
        <div className="button_confirm">
          <button>Oui</button>
          <button>Non</button>
        </div>
      </div>
    </div>
  );
}

export default dialogDeleteConfirm;
