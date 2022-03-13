import axios from "axios";
import React, { useState } from "react";
// Import components
import InputField from "../../../Components/InputRegister";
// Import css
import "./addSemis.scss";

function AddSemis() {
  const token = localStorage.getItem("token");
  // variable for define the time zone
  let date = new Date();
  const myTimeZone = 1;
  // Initial state
  const [formSemis, setFormSemis] = useState({
    variete: "",
    famille: "",
    modeSemis: "",
    dateArrosage: new Date(
      date.setTime(date.getTime() + myTimeZone * 60 * 60 * 1000)
    ),
    dateSemis: new Date(
      date.setTime(date.getTime() + myTimeZone * 60 * 60 * 1000)
    ),
    NomSemis: "",
  });
  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormSemis(formSemis);

    axios
      .post(
        `${API_URLS}/legume/create`,
        {
          date_semis: formSemis.dateSemis,
          variete: formSemis.variete,
          family: formSemis.famille,
          name: formSemis.NomSemis,
          modeSemis: formSemis.modeSemis,
          dateArrosage: formSemis.dateArrosage,
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addSemis">
      <div className="addSemis--box">
        <form onSubmit={handleSubmit}>
          <div className="addSemis--title">
            <h1>Ajout de semis</h1>
          </div>
          <InputField
            name="variete"
            label="Variété"
            placeholder=" "
            type="text"
            value={formSemis.variete}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, variete: e.target.value })
            }
            required
          />
          <InputField
            name="famille"
            label="Famille"
            placeholder=" "
            type="text"
            value={formSemis.famille}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, famille: e.target.value })
            }
            required
          />
          <InputField
            name="date-semis"
            label="Date du semis"
            placeholder=" "
            type="date"
            dateFormat="yyyy-MM-dd"
            value={formSemis.dateSemis}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, dateSemis: e.target.value })
            }
            required
          />
          <InputField
            name="nom-semis"
            label="Nom du semis"
            placeholder=" "
            type="text"
            value={formSemis.NomSemis}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, NomSemis: e.target.value })
            }
            required
          />
          <InputField
            name="mode-semis"
            label="Mode de semis"
            placeholder=" "
            type="text"
            value={formSemis.modeSemis}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, modeSemis: e.target.value })
            }
            required
          />
          <InputField
            name="date-arrosage"
            label="Date du dernier arrosage (facultatif)"
            placeholder=" "
            type="date"
            value={formSemis.dateArrosage}
            manageChange={(e) =>
              setFormSemis({ ...formSemis, dateArrosage: e.target.value })
            }
          />
          <button className="addSemis_button">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default AddSemis;
