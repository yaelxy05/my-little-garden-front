import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faChalkboardUser, faAddressCard, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/img/logo/My little Farmer.svg";
// Import scss
import "./navigationMobile.scss";

// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";

function NavigationMobile() {
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);
  const { setToken } = useContext(TokenContext);
  const [isOpen, setIsOpen] = useState(false);
  // function for closing menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const windowCloseMenu = () => (setIsOpen(false));

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => { document.removeEventListener("click", checkIfClickedOutside); };
  }, [isOpen]);

  const logOut = () => {
    window.location = "/connexion";
    localStorage.removeItem("token");
    setToken(null);
    setIsConnected(false);
  };

  return (
    <>
      <nav className="navigation_mobile" ref={ref}>
        <div className="navigation_header">
          <div className="navigation_li--picture">
            <img src={Logo} alt="logo my little farmer" />
          </div>
          <div
            className={isOpen ? "" : "nav_burger-icon"}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className={isOpen ? "active" : "navigation_mobile--link"}>
          
          <ul>
          <div
            className={isOpen ? "nav_burger-icon--open" : ""}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
            <li>
           
              <NavLink exact to="/" activeClassName="current" onClick={windowCloseMenu}>
                <FontAwesomeIcon icon={faHouse} className="icon" />Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendrier" activeClassName="current" onClick={windowCloseMenu}>
              <FontAwesomeIcon icon={faCalendar} className="icon" />Calendrier des semis
              </NavLink>
            </li>

            {!isConnected && (
              <>
                <li>
                  <NavLink to="/connexion" activeClassName="current" onClick={windowCloseMenu}>
                  <FontAwesomeIcon icon={faChalkboardUser} className="icon login_icon" />Se connecter
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/inscription" activeClassName="current" onClick={windowCloseMenu}>
                  <FontAwesomeIcon icon={faAddressCard} className="icon register_icon" />Inscription
                  </NavLink>
                </li>
              </>
            )}

            {isConnected && (
              <>
                <li>
                  <NavLink to="/espace-utilisateur" activeClassName="current" onClick={windowCloseMenu}>
                  <FontAwesomeIcon icon={faAddressCard} className="icon register_icon" />Espace utilisateur
                  </NavLink>
                </li>
                <li className="button_logged" onClick={logOut}>
                <FontAwesomeIcon icon={faDoorOpen} className="icon logout_icon" />Déconnexion
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationMobile;
