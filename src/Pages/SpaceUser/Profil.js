import React, { useState, useEffect, useContext } from "react";
// Import package
import axios from "axios";
// Import Context
import {
  InfoUserContext
} from "../../Utils/Context/index";
// import scss
import "./profil.scss";
function Profil() {
  // Context
  const { getInfoUser } = useContext(InfoUserContext);
  // Initial state
  const [formDataUser, setFormDataUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    id: "",
  });

  const [messageSuccess, setMessageSuccess] = useState("");

  // for activate or deactivate input
  const [modifyInputInformation, setModifyInputInformation] = useState(false);

  const activateButton = () => setModifyInputInformation(true);
  const desactivateButton = () => setModifyInputInformation(false);

  const [modifyInputPassword, setModifyInputPassword] = useState(false);

  const activateButtonPassword = () => setModifyInputPassword(true);
  const desactivateButtonPassword = () => setModifyInputPassword(false);

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

  // Function for update user info
  const handleUpdateProfile = async (evt) => {
    const token = localStorage.getItem("token");
    const API_URLS = process.env.REACT_APP_API_URL;
    evt.preventDefault();
    setFormDataUser(formDataUser);

    axios
      .patch(
        `${API_URLS}/user/update/${formDataUser.id}`,
        {
          email: formDataUser.email,
          lastname: formDataUser.lastname,
          firstname: formDataUser.firstname,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setMessageSuccess(response.data.message);
        setTimeout(() => {
          setMessageSuccess("");
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function for update avatar of user
  const [uploadFile, setUploadFile] = useState({
    avatar: null,
    preview: null,
  });
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const handleUpdateAvatar = async (evt) => {
    const token = localStorage.getItem("token");
    const API_URLS = process.env.REACT_APP_API_URL;
    evt.preventDefault();
    const formDataAvatar = new FormData();
    formDataAvatar.append("avatar", uploadFile.avatar);

    if (uploadFile.avatar !== null && uploadFile.avatar.size > 2e6) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    } else {
      setError(false);
      axios
        .post(
          `${API_URLS}/user/${formDataUser.id}/update/avatar`,
          formDataAvatar,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          setSucess(true);
          getInfoUser();
          setTimeout(() => {
            setSucess(false);
          }, 2500);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
            <form onSubmit={handleUpdateProfile}>
              <div className="profil_data--input">
                <input
                  type="text"
                  name="lastname"
                  readOnly={!modifyInputInformation}
                  value={formDataUser.lastname}
                  id="name"
                  className={modifyInputInformation ? "focus_input" : ""}
                  onChange={(e) =>
                    setFormDataUser({
                      ...formDataUser,
                      lastname: e.target.value,
                    })
                  }
                />
                <label htmlFor="name">Nom</label>
              </div>
              <div className="profil_data--input">
                <input
                  type="text"
                  name="firstname"
                  readOnly={!modifyInputInformation}
                  value={formDataUser.firstname}
                  id="firstname"
                  className={modifyInputInformation ? "focus_input" : ""}
                  onChange={(e) =>
                    setFormDataUser({
                      ...formDataUser,
                      firstname: e.target.value,
                    })
                  }
                />
                <label htmlFor="firstname">Prénom</label>
              </div>
              <div className="profil_data--input">
                <input
                  type="email"
                  name="email"
                  readOnly={!modifyInputInformation}
                  value={formDataUser.email}
                  id="email"
                  className={modifyInputInformation ? "focus_input" : ""}
                  onChange={(e) =>
                    setFormDataUser({
                      ...formDataUser,
                      email: e.target.value,
                    })
                  }
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
            </form>
          </div>
          {messageSuccess ===
            "Les informations utilisateur ont bien été modifié." && (
            <div className="message_success">
              <p>{messageSuccess}</p>
            </div>
          )}
        </article>
        <div className="profil_data--right">
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
                    <label htmlFor="current-password">
                      Mot de passe actuel
                    </label>
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
          </div>
          <div className="profil_data--avatar">
            <header>
              <h2>Modifier mon avatar</h2>
            </header>
            <div className="profil_data--avatar--box">
              <form
                className="profil_data--avatar--middle"
                onSubmit={handleUpdateAvatar}
              >
                <div className="profil_data--avatar--input">
                  <input
                    type="file"
                    name="avatar"
                    accept=".jpg,.png,.svg"
                    id="avatar"
                    className="input_avatar"
                    size="2000"
                    onChange={(e) =>
                      setUploadFile({
                        ...uploadFile,
                        preview: URL.createObjectURL(e.target.files[0]),
                        avatar: e.target.files[0],
                      })
                    }
                    aria-label="Sélectionner un avatar"
                  />

                  <div className="button_box">
                    <button>Valider</button>
                  </div>
                </div>

                {uploadFile.preview !== null && uploadFile && (
                  <img className="avatar_preview" src={uploadFile.preview} />
                )}
              </form>
              {error && (
                <>
                  <p className="avatar_error">
                    La taille de l'avatar ne doit pas dépasser 2MO
                  </p>
                </>
              )}
              {sucess && (
                <>
                  <p className="avatar_sucess">
                    L'avatar a bien etait modifié!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
