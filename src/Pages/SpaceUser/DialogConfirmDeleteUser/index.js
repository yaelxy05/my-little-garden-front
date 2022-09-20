import React, { useContext } from "react";
// import SCSS
import "../DialogConfirmDeleteUser/dialog.scss";
// Import Context
import {
  UserAccountDeleteContext,
} from "../../../Utils/Context/auth";


function DialogDeleteConfirm({idUser, nameUser}) {
  // Context
  const { handleDeleteAccount, setDeleteConfirm } =
    useContext(UserAccountDeleteContext);
  return (
    <div className="dialog_box">
      <div className="dialog_inner">
              <h3>Etes vous sûr de vouloir supprimer ce compte?</h3>
              <p> {nameUser}</p>
        <div className="button_confirm">
          <button
            className="button_confirm--yes"
            onClick={() => {
              handleDeleteAccount(idUser);
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
