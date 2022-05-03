import React, { useState, useEffect } from "react";
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

// Import package
import axios from "axios";


function MenuUser() {
  // Initial state
  const [formDataUser, setFormDataUser] = useState({
    firstname: "",
    lastname: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const API_URLS = process.env.REACT_APP_API_URL;
  
    const getInfoUser = async () => {
      axios
        .get(`${API_URLS}/users`, {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setFormDataUser(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getInfoUser();
  }, []);

  return (
    <>
      <aside className="menu_user">
        <div className="menu_user-img">
          <img src={Avatar} alt="avatar profil" />
          <p>{ formDataUser.lastname + " " + formDataUser.firstname}</p>
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
        </ul>
      </aside>
      <Outlet />
    </>
  );
}

export default MenuUser;
