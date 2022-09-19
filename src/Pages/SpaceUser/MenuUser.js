import React, { useEffect, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// Import Context
import { InfoUserContext } from "../../Utils/Context/index";
import { UserAccountDeleteContext } from "../../Utils/Context/auth";
// Import Components
import DialogDeleteConfirmUser from "./DialogConfirmDeleteUser";
// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSeedling,
  faRectangleList,
  faCarrot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// Import picture
import Avatar from "../../assets/img/avatar/user.png";

function MenuUser() {
  // state for get name and id for deleting a carre
  const [idUser, setIdUser] = useState(null);
  const [nameUser, setNameUser] = useState(null);
  // Context
  const { loading, getInfoUser, formDataUser } = useContext(InfoUserContext);
  const { deleteConfirm, setDeleteConfirm } = useContext(
    UserAccountDeleteContext
  );

  useEffect(() => {
    getInfoUser();
  }, [getInfoUser]);

  return (
    <>
      <aside className="menu_user">
        <div className="menu_user-img">
          {!loading && formDataUser.avatar !== null && (
            <img
              src={"http://127.0.0.1:8000/images/" + formDataUser.avatar}
              alt="avatar profil"
            />
          )}
          {formDataUser.avatar === null && (
            <img src={Avatar} alt="avatar profil default" />
          )}
          <p>{formDataUser.lastname + " " + formDataUser.firstname}</p>
        </div>

        <ul>
          <li>
            <Link to="/espace-utilisateur/mon-profil">
              <FontAwesomeIcon icon={faUser} />
              <p>Mon profil</p>
            </Link>
          </li>
          <li>
            <Link to="/espace-utilisateur/add-semis">
              <FontAwesomeIcon icon={faSeedling} />
              <p>Ajouter un semis</p>
            </Link>
          </li>
          <li>
            <Link to="/espace-utilisateur/liste-semis">
              <FontAwesomeIcon icon={faRectangleList} />
              <p>Liste de mes semis</p>
            </Link>
          </li>
          <li>
            <Link to="/espace-utilisateur/mon-potager">
              <FontAwesomeIcon icon={faCarrot} />
              <p>Mon potager</p>
            </Link>
          </li>

          <li className="spaceuser_remove">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setDeleteConfirm(true);
                setIdUser(formDataUser.id);
                setNameUser(formDataUser.name);
              }}
            />
            <p
              onClick={() => {
                setDeleteConfirm(true);
                setIdUser(formDataUser.id);
                setNameUser(formDataUser.name);
              }}
            >
              Supprimer mon compte
            </p>
          </li>
        </ul>
      </aside>
      {deleteConfirm && (
        <>
          <DialogDeleteConfirmUser nameUser={nameUser} idUser={idUser} />
        </>
      )}
      <Outlet />
    </>
  );
}

export default MenuUser;
