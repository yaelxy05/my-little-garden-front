import React, { useState, createContext, useContext, useCallback } from "react";
import axios from "axios";

// info API
const API_URLS = process.env.REACT_APP_API_URL;

export const GetDataPotagerContext = createContext();
export const HandleSubmitCreatePlantContext = createContext();
export const HandleSubmitCreatePotagerContext = createContext();
export const DeletePotagerContext = createContext();
export const DeletePlantContext = createContext();

export const GetDataPotagerProvider = ({ children }) => {
  // Initial state
  const [listPotager, setListPotager] = useState([]);

  const fetchDataPotager = useCallback(() => {
    const token = localStorage.getItem("token");
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
        setListPotager(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <GetDataPotagerContext.Provider
      value={{ listPotager, setListPotager, fetchDataPotager }}
    >
      {children}
    </GetDataPotagerContext.Provider>
  );
};

export const HandleSubmitCreatePlantProvider = ({ children }) => {
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  const [sucess, setSucess] = useState(false);
  const [formDataPlant, setFormDataPlant] = useState({
    name: "",
    family: "",
    variete: "",
    potager: "",
    id: "",
  });

  const HandleSubmitCreatePlant = (evt) => {
    evt.preventDefault();
    setFormDataPlant(formDataPlant);
    const token = localStorage.getItem("token");
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
        fetchDataPotager();
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
    <HandleSubmitCreatePlantContext.Provider
      value={{
        HandleSubmitCreatePlant,
        setFormDataPlant,
        formDataPlant,
        sucess,
      }}
    >
      {children}
    </HandleSubmitCreatePlantContext.Provider>
  );
};

export const HandleSubmitCreatePotagerProvider = ({ children }) => {
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  // Initial state
  const [sucess, setSucess] = useState(false);
  const [formDataPotager, setFormDataPotager] = useState({
    name: "",
    size: 33,
  });

  const HandleSubmitCreatePotager = async (evt) => {
    evt.preventDefault();

    setFormDataPotager(formDataPotager);
    const token = localStorage.getItem("token");
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
    <HandleSubmitCreatePotagerContext.Provider
      value={{
        HandleSubmitCreatePotager,
        formDataPotager,
        setFormDataPotager,
        sucess,
      }}
    >
      {children}
    </HandleSubmitCreatePotagerContext.Provider>
  );
};

export const DeletePotagerProvider = ({ children }) => {
  // state
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  // function for delete potager
  const deletePotager = async (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${API_URLS}/potager/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        fetchDataPotager();
        setDeleteConfirm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DeletePotagerContext.Provider
      value={{
        deletePotager,
        deleteConfirm,
        setDeleteConfirm,
      }}
    >
      {children}
    </DeletePotagerContext.Provider>
  );
};

export const DeletePlantProvider = ({ children }) => {
  const { fetchDataPotager } = useContext(GetDataPotagerContext);
  // function for delete plant
  const deletePlant = async (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${API_URLS}/plant/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        fetchDataPotager();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DeletePlantContext.Provider
      value={{
        deletePlant,
      }}
    >
      {children}
    </DeletePlantContext.Provider>
  );
};
