import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
// Import components
import InputField from "../../../../Components/InputMyGarden";
// import SCSS
import "./potagerForm.scss";
// Import package
import axios from "axios";
// Import PotagerPlant
import PotagerPlant from "./PotagerPlant";
// Import Context
import { GetDataPotagerContext } from "../../../../Utils/Context";

function PotagerForm() {
  // Initial state
  const [sucess, setSucess] = useState(false);
  const [formDataPotager, setFormDataPotager] = useState({
    name: "",
    size: 33,
  });
  // Context
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  // API Information
  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;
  // function for create a new potager
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setFormDataPotager(formDataPotager);

    axios
      .post(
        `${API_URLS}/potager/create`,
        {
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
        if (response.statusText === "OK") {
          fetchDataPotager();
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
            <label>Taille du carré</label>
            <select
              value={formDataPotager.size}
              name="size"
              onChange={(e) =>
                setFormDataPotager({
                  ...formDataPotager,
                  size: parseInt(e.target.value, 10),
                })
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
          </div>
          <div className="addCarre_box">
            <button className="addCarre_button">Ajouter</button>
          </div>
          {sucess && (
            <div className="message_sucess--box">
              <p className="message_sucess">Le carré a bien été ajouté</p>
            </div>
          )}
        </form>
      </div>
      <PotagerPlant />
    </div>
  );
}

PotagerForm.prototypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PotagerForm;
