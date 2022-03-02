import React from "react";
import { Link, Outlet } from "react-router-dom";

// Import picture
import Avatar from '../../assets/img/logo/My little Farmer.svg'

function MenuUser() {
  return (
    <> 
      <aside className="menu_user">
          <div className="menu_user-img">
              <img src={Avatar} alt="avatar profil" />
              <p>Name</p>
          </div>
     
      <ul>
        <li>
          <Link to="/espace-utilisateur/mon-profil" >
            Mon profil
          </Link>
        </li>
        <li>Ajouter un semis</li>
        <li>Liste de mes semis</li>
        <li>Mon potager</li>
      </ul>
    </aside>
    <Outlet />
    </>
  );
}

export default MenuUser;
