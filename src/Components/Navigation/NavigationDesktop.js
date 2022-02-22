import React from "react";
import Logo from "../../assets/img/logo/My little Farmer.svg";
import "./navigationDesktop.scss";
import { NavLink } from "react-router-dom";

function NavigationDesktop() {
  return (
    <>
      <ul className="navigation_desktop">
        <li>
          <NavLink exact to="/" activeClassName="current">
            Accueil
          </NavLink>
        </li>
        <li><NavLink to="/calendrier" activeClassName="current">Calendrier des semis</NavLink></li>
        <li className="navigation_li--picture">
          <img src={Logo} alt="logo my little farmer" />
        </li>
        <li><NavLink to="/connexion" activeClassName="current">Se connecter</NavLink></li>
        <li><NavLink to="/inscription" activeClassName="current">Inscription</NavLink></li>
      </ul>
    </>
  );
}

export default NavigationDesktop;
