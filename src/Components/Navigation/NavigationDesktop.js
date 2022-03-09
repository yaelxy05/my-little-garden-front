import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo/My little Farmer.svg";
// Import scss
import "./navigationDesktop.scss";

// Import Context
import { IsConnectedContext, TokenContext } from "../../Utils/Context";

function NavigationDesktop() {
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);
  const { setToken } = useContext(TokenContext);

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
          <NavLink end to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendrier" >
            Calendrier des semis
          </NavLink>
        </li>
        <li className="navigation_li--picture">
          <img src={Logo} alt="logo my little farmer" />
        </li>
        {isConnected && (
          <>
            <li>
              <NavLink to="/espace-utilisateur/mon-profil" >
                Espace utilisateur
              </NavLink>
            </li>
            <li className="button_logged" onClick={logOut}>
              Déconnexion
            </li>
          </>
        )}
        {!isConnected && (
          <>
            <li>
              <NavLink to="/connexion" >
                Se connecter
              </NavLink>
            </li>
            <li>
              <NavLink to="/inscription" >
                Inscription
              </NavLink>
            </li>
          </>
        )}

        
      </ul>
    </>
  );
}

export default NavigationDesktop;
