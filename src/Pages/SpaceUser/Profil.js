import React, { useState } from "react";
import "./profil.scss";
function Profil() {
  // for activate or deactivate input
  const [modifyInputInformation, setModifyInputInformation] = useState(false);

  const activateButton = () => setModifyInputInformation(true);
  const desactivateButton = () => setModifyInputInformation(false);

  const [modifyInputPassword, setModifyInputPassword] = useState(false);

  const activateButtonPassword = () => setModifyInputPassword(true);
  const desactivateButtonPassword = () => setModifyInputPassword(false);
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
                readOnly={!modifyInputInformation}
                value="Fontraille"
                id="name"
                className={modifyInputInformation ? "focus_input" : ""}
              />
              <label htmlFor="name">Nom</label>
            </div>
            <div className="profil_data--input">
              <input
                type="text"
                name="firstname"
                readOnly={!modifyInputInformation}
                value="alexia"
                id="firstname"
                className={modifyInputInformation ? "focus_input" : ""}
              />
              <label htmlFor="firstname">Prénom</label>
            </div>
            <div className="profil_data--input">
              <input
                type="email"
                name="email"
                readOnly={!modifyInputInformation}
                value="afontraille@gmail.com"
                id="email"
                className={modifyInputInformation ? "focus_input" : ""}
              />
              <label htmlFor="email">Email</label>
            </div>
            {modifyInputInformation && (
              <>
                <div className="button_box">
                  <button>Valider</button>
                  <button onClick={desactivateButton}>Annuler</button>
                </div>
              </>
            )}
            {!modifyInputInformation && (
              <div className="button_box">
                <button onClick={activateButton}>Modifier</button>
              </div>
            )}
          </div>
        </article>
        <div className="profil_data--modify">
          <article
            className={
              modifyInputPassword
                ? "profil_data input_modify--active"
                : "profil_data input_modify"
            }
          >
            <header>
              <h2>Mon mot de passe</h2>
            </header>
            {modifyInputPassword && (
              <>
                <div className="profil_data--input">
                  <input
                    type="password"
                    name="current-password"
                    value=""
                    id="current-password"
                    className="focus_input"
                  />
                  <label htmlFor="current-password">Mot de passe actuel</label>
                  <a href="#">Mot de passe oublié ?</a>
                </div>
                <div className="profil_data--input">
                  <input
                    type="password"
                    name="new-password"
                    value=""
                    id="new-password"
                    className="focus_input"
                  />
                  <label htmlFor="new-password">Nouveau mot de passe</label>
                </div>
                <div className="profil_data--input">
                  <input
                    type="password"
                    name="confirm-new-password"
                    value=""
                    id="confirm-new-password"
                    className="focus_input"
                  />
                  <label htmlFor="confirm-new-password">
                    Confirmer le mot de passe
                  </label>
                </div>
                <button>Valider</button>
                <button onClick={desactivateButtonPassword}>Annuler</button>
              </>
            )}
            {!modifyInputPassword && (
              <>
                <button onClick={activateButtonPassword}>Modifier</button>
                <a href="#">Mot de passe oublié ?</a>
              </>
            )}
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
                  id="email-data"
                />
                <label htmlFor="email-data">Nom</label>
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
