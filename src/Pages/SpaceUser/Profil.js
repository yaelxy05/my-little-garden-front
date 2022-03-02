import React from "react";
import "./profil.scss";
function Profil() {
  return (
    <div className="profil">
      <div className="profil_title">
        <h1>Informations</h1>
      </div>
      <div className="profil_data--box">
        <article className="profil_data information">
          <header>
            <h2>Mes informations personnelles</h2>
          </header>
          <div className="profil_data--form">
            <div className="profil_data--input">
              <input
                type="text"
                name="name"
                readOnly
                value="alexia"
                id="name"
              />
              <label htmlFor="name">Nom</label>
            </div>
            <div className="profil_data--input">
              <input
                type="text"
                name="name"
                readOnly
                value="alexia"
                id="name"
              />
              <label htmlFor="name">Nom</label>
            </div>
            <div className="profil_data--input">
              <input
                type="text"
                name="name"
                readOnly
                value="alexia"
                id="name"
              />
              <label htmlFor="name">Nom</label>
            </div>
          </div>
        </article>
        <div className="profil_data--modify">
          <article className="profil_data input_modify">
            <header>
              <h2>Mon mot de passe</h2>
            </header>
            <button>Modifier</button>
            <a href="#">Mot de passe oublié ?</a>
          </article>
          <article className="profil_data input_modify">
            <header>
              <h2>Mon Email</h2>
            </header>
            <div className="profil_data--email">
              <div className="profil_data--email">
                <input
                  type="email"
                  name="email"
                  readOnly
                  value="afontraille@gmail.com"
                  id="email"
                />
                <label htmlFor="email">Nom</label>
              </div>
              <button className="button_email">Modifier</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Profil;
