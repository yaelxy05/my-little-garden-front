import React, { useState } from "react";
// Import components
import InputField from "../../../../Components/InputMyGarden";
// import SCSS
import "./potagerForm.scss";
// Import package
import axios from "axios";

function PotagerForm() {
  // Initial state
  const [formDataPotager, setFormDataPotager] = useState({
    name: "",
    size: 33,
  });
  console.log(formDataPotager.size);
  console.log(formDataPotager.name);

  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setFormDataPotager(formDataPotager);

    axios
      .post(`${API_URLS}/potager/create`, {
        name: formDataPotager.name,
        size: formDataPotager.size,
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
    <div className="potager_form">
      <div className="potager_addCarre">
        <form onSubmit={handleSubmit}>
          <h1>Ajout d'un carré de potager</h1>
          <InputField
            name="name"
            placeholder=" "
            label="Nom du carré"
            classname="addCarre_input"
            value={formDataPotager.name}
            type="text"
            manageChange={(e) =>
              setFormDataPotager({ ...formDataPotager, name: e.target.value })
            }
          />
          <div className={"input_box"}>
            <select
              value={formDataPotager.size}
              name="size"
              onChange={(e) =>
                setFormDataPotager({ ...formDataPotager, size: parseInt(e.target.value,10) })
              }
              className="addCarre_input"
              placeholder=" "
              type="select"
            >
              <option value={33}>3 X 3</option>
              <option value={24}>2 X 4</option>
              <option value={25}>2 X 5</option>
              <option value={35}>3 X 5</option>
            </select>
            <label>Taille du carré</label>
          </div>
          <div className="addCarre_box">
            <button className="addCarre_button">Ajouter</button>
          </div>
        </form>
      </div>
      <div className="potager_addPlant">
        <form>
          <h1>Ajout d'un plant</h1>
          <InputField
            name="name"
            placeholder=" "
            label="Nom du plant"
            classname="addPlant_input"
            type="text"
          />
          <InputField
            name="family"
            placeholder=" "
            label="Famille"
            classname="addPlant_input"
            type="text"
          />
          <InputField
            name="variete"
            placeholder=" "
            label="Variété"
            classname="addPlant_input"
            type="text"
          />
          <InputField
            name="potager"
            placeholder=" "
            label="Nom du carré"
            classname="addPlant_input"
            value={formDataPotager.potager}
            type="text"
            manageChange={(e) =>
              setFormDataPotager({ ...formDataPotager, potager: e.target.value })
            }
          />
          <div className="addCarre_box">
            <button className="addCarre_button">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PotagerForm;
