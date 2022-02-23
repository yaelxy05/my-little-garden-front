import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo/My little Farmer.svg";
// Import scss
import "./navigationDesktop.scss";

// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";

function NavigationDesktop() {
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);
  const { token, setToken } = useContext(TokenContext);

  const logOut = () => {
    window.location = "/connexion";
    localStorage.removeItem("token");
    setToken(null);
    setIsConnected(false);
  };
  
  return (
    <>
      <ul className="navigation_desktop">
        <li>
          <NavLink exact to="/" activeClassName="current">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendrier" activeClassName="current">
            Calendrier des semis
          </NavLink>
        </li>
        <li className="navigation_li--picture">
          <img src={Logo} alt="logo my little farmer" />
        </li>
        {!isConnected && (
          <>
            <li>
              <NavLink to="/connexion" activeClassName="current">
                Se connecter
              </NavLink>
            </li>
            <li>
              <NavLink to="/inscription" activeClassName="current">
                Inscription
              </NavLink>
            </li>
          </>
        )}

        {isConnected && (
          <>
            <li>
              <NavLink to="/espace-utilisateur" activeClassName="current">
                Espace utilisateur
              </NavLink>
            </li>
            <li className="button_logged" onClick={logOut}>
              Déconnexion
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default NavigationDesktop;
