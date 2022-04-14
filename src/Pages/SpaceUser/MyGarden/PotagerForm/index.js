import React, { useState } from "react";
// Import components
import InputField from "../../../../Components/InputMyGarden";
// import SCSS
import "./potagerForm.scss";
// Import package
import axios from "axios";

function PotagerForm() {
  // Initial state
  const [formData, setFormData] = useState({
    name: "",
    size: 33,
  });
  console.log(formData.size);
  console.log(formData.name);

  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setFormData(formData);

    axios
      .post(`${API_URLS}/potager/create`, {
        name: formData.name,
        size: formData.size,
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
            value={formData.name}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <div className={"input_box"}>
            <select
              value={formData.size}
              name="size"
              onChange={(e) =>
                setFormData({ ...formData, size: e.target.value })
              }
              className="addCarre_input"
              placeholder=" "
              type="select"
            >
              <option type="number" value={33}>3 X 3</option>
              <option type="number" value={24}>2 X 4</option>
              <option type="number" value={25}>2 X 5</option>
              <option type="number" value={35}>3 X 5</option>
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
            value={formData.potager}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, potager: e.target.value })
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
