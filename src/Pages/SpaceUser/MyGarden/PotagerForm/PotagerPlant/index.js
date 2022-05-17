import React, { useState, useEffect } from "react";

// Import components
import InputField from "../../../../../Components/InputMyGarden";

// import SCSS
import "../potagerForm.scss";
// Import package
import axios from "axios";

function PotagerPlant() {
  // Initial state
  const [sucess, setSucess] = useState(false);
  const [formDataPlant, setFormDataPlant] = useState({
    name: "",
    family: "tomate",
    variete: "",
    potager: 1,
    id: "",
  });
  const [listPlant, setListPlant] = useState([]);

  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;

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
        if (response.statusText === "OK") {
          setSucess(true);
          setTimeout(() => {
            setSucess(false);
          }, 2500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
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
        getPotagerNumber();
        if (response.statusText === "OK") {
          setSucess(true);
          setTimeout(() => {
            setSucess(false);
          }, 2500);
        }
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
        <div className={"input_box"}>
          <label>Famille</label>
          <select
            value={formDataPlant.family}
            name="family"
            onChange={(e) =>
              setFormDataPlant({
                ...formDataPlant,
                family: e.target.value,
              })
            }
            className="addPlant_input"
            placeholder=" "
            type="select"
          >
            <option value="tomate">Tomate</option>
            <option value="salade">Salade</option>
            <option value="haricot">Haricot</option>
            <option value="basilic">Basilic</option>
            <option value="piment">Piment</option>
            <option value="betterave">Betterave</option>
            <option value="melon">Melon</option>
            <option value="cornichon">Cornichon</option>
          </select>
        </div>
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
        {sucess && (
          <div className="message_sucess--box">
            <p className="message_sucess">Le plant a bien été ajouté</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default PotagerPlant;
