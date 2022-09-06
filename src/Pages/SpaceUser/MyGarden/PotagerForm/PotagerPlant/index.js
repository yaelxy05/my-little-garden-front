import React, { useContext } from "react";

// Import components
import InputField from "../../../../../Components/InputMyGarden";
// import SCSS
import "../potagerForm.scss";
// Import Context
import {
  GetDataPotagerContext,
  HandleSubmitCreatePlantContext,
} from "../../../../../Utils/Context/potager";

function PotagerPlant() {
  // Context
  const { listPotager } = useContext(GetDataPotagerContext);
  const { HandleSubmitCreatePlant, setFormDataPlant, formDataPlant, sucess } =
    useContext(HandleSubmitCreatePlantContext);

  return (
    <div className="potager_addPlant">
      <form onSubmit={HandleSubmitCreatePlant}>
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
            <option value="" hidden="hidden">
              Veuillez sélectionnez une famille
            </option>
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
            <option value="" hidden="hidden">
              Veuillez sélectionnez un carré
            </option>
            {listPotager &&
              listPotager.map((list, index) => {
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
