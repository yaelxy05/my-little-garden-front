import axios from "axios";
import React, { useEffect, useState } from "react";

import "./listSemis.scss";


function ListSemis() {
  const API_URLS = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getSemisList();
  }, []);

  const [listSemis, setListSemis] = useState([]);

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getSemisList = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URLS}/legumes`, {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setListSemis(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="list-semis">
      <div className="list-semis--title">
        <h1>Listes des semis</h1>
      </div>
      <div className="list-semis--box">
        <table>
          <thead>
            <tr>
              <td>Variété</td>
              <td>Famille</td>
              <td>Nom du semis</td>
              <td>Date de semis</td>
              <td>Date dernier arrosage</td>
            </tr>
          </thead>
          <tbody>{listSemis && listSemis.map((list, index) => {
            const update = new Date(
              list.date_semis
            ).toLocaleDateString("fr-FR", options);
            return (
              <tr key={index}>
                <td>{list.variete}</td>
                <td>{list.family}</td>
                <td>{list.name}</td>
                <td>{update}</td>
                
              </tr>
            )
          })}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ListSemis;
