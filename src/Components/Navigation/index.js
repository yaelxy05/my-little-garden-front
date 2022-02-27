import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import "./navigation.scss";
import NavigationMobile from "./NavigationMobile";


function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <NavigationDesktop />
        <NavigationMobile />
      </nav>
    </div>
  );
}

export default Navigation;
