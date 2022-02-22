import React from "react";
import Logo from "../../assets/img/logo/My little Farmer.svg"
import "./navigationDesktop.scss";

function NavigationDesktop() {
  return (
    <>
      <ul className="navigation_desktop">
        <li>Accueil</li>
        <li>Calendrier des semis</li>
        <li className="navigation_li--picture"><img src={Logo} alt="logo my little farmer" /></li>
        <li>Se connecter</li>
        <li>Inscription</li>
      </ul>
    </>
  );
}

export default NavigationDesktop;
