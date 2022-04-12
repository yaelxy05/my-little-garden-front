import React, { useState } from "react";
// Import components
import InputField from "../../../../Components/InputMyGarden";
// import SCSS
import "./potagerForm.scss";

function PotagerForm() {
  // Initial state
  const [formData, setFormData] = useState({
    name: "",
    size: 0,
  });
  return (
    <div className="potager_form">
      <div className="potager_addCarre">
        <form>
          <h1>Ajout d'un carré de potager</h1>
          <InputField
            name="name"
            placeholder=" "
            label="nom du carré"
            classname="addCarre_input"
            value={formData.name}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <InputField
            name="size"
            placeholder=" "
            label="taille du carré"
            classname="addCarre_input"
            value={formData.name}
            type="select"
            manageChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
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
            label="nom du plant"
            classname="addPlant_input"
            value={formData.name}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <InputField
            name="family"
            placeholder=" "
            label="famille"
            classname="addPlant_input"
            value={formData.family}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, family: e.target.value })
            }
          />
          <InputField
            name="variete"
            placeholder=" "
            label="variété"
            classname="addPlant_input"
            value={formData.variete}
            type="text"
            manageChange={(e) =>
              setFormData({ ...formData, variete: e.target.value })
            }
                  />
                  <InputField
            name="potager"
            placeholder=" "
            label="nom du carré"
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
