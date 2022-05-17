import React from "react";
import "./header.scss";


function Header() {
  return (
    <section className="header">
      <div className="header_description">
        <h1>My Little Garden</h1>
        <p>Une nouvelle façon de concevoir son jardin potager</p>
      </div>

      <div className="header_divider--bottom"></div>

    </section>
  );
}

export default Header;
