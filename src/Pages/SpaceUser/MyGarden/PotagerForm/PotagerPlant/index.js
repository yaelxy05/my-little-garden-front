import React, { useState, useEffect } from "react";
// Import components
import InputField from "../../../../../Components/InputMyGarden";

// import SCSS
import "../potagerForm.scss";
// Import package
import axios from "axios";

function PotagerPlant() {
  // Initial state
  const [formDataPlant, setFormDataPlant] = useState({
    name: "",
    family: "",
    variete: "",
    potager: "",
  });
  const [listPlant, setListPlant] = useState([]);

  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getPotagerNumber = () => {
      axios
        .get(`${API_URLS}/potager`, {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setListPlant(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPotagerNumber();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setFormDataPlant(formDataPlant);

    axios
      .post(
        `${API_URLS}/plant/create`,
        {
          name: formDataPlant.name,
          family: formDataPlant.family,
          variete: formDataPlant.variete,
          potager: formDataPlant.potager,
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
    <div className="potager_addPlant">
      <form onSubmit={handleSubmit}>
        <h1>Ajout d'un plant</h1>
        <InputField
          name="name"
          placeholder=" "
          label="Nom du plant"
          classname="addPlant_input"
          type="text"
          value={formDataPlant.name}
          manageChange={(e) =>
            setFormDataPlant({ ...formDataPlant, name: e.target.value })
          }
        />
        <InputField
          name="family"
          placeholder=" "
          label="Famille"
          classname="addPlant_input"
          type="text"
          value={formDataPlant.family}
          manageChange={(e) =>
            setFormDataPlant({ ...formDataPlant, family: e.target.value })
          }
        />
        <InputField
          name="variete"
          placeholder=" "
          label="Variété"
          classname="addPlant_input"
          type="text"
          value={formDataPlant.variete}
          manageChange={(e) =>
            setFormDataPlant({ ...formDataPlant, variete: e.target.value })
          }
        />

        <div className={"input_box"}>
          <label>Nom du potager</label>
          <select
            value={formDataPlant.potager}
            name="potager"
            onChange={(e) =>
              setFormDataPlant({
                ...formDataPlant,
                potager: parseInt(e.target.value, 10),
              })
            }
            className="addCarre_input"
            placeholder=" "
            type="select"
          >
            {listPlant &&
              listPlant.map((list, index) => {
                return (
                  <option key={index} value={list.id}>
                    {list.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="addCarre_box">
          <button className="addCarre_button">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default PotagerPlant;
