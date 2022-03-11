import React from "react";
import { Link, Outlet } from "react-router-dom";
// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSeedling,
  faRectangleList,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";
// Import picture
import Avatar from "../../assets/img/avatar/user.png";

function MenuUser() {
  return (
    <>
      <aside className="menu_user">
        <div className="menu_user-img">
          <img src={Avatar} alt="avatar profil" />
          <p>HUE Yael</p>
        </div>

        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <Link to="/espace-utilisateur/mon-profil">Mon profil</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faSeedling} />
            <Link to="/espace-utilisateur/add-semis">Ajouter un semis</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faRectangleList} />
            <Link to="/espace-utilisateur/liste-semis">Liste de mes semis</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCarrot} />
            <Link to="/espace-utilisateur/mon-potager">Mon potager</Link>
            
          </li>
        </ul>
      </aside>
      <Outlet />
    </>
  );
}

export default MenuUser;
