import React from "react";
import "./listSemis.scss";

function ListSemis() {
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
                          <td>Date de semis</td>
                          <td>Famille</td>
                          <td>Date dernier arrosage</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr></tr>
                  </tbody>
          </table>
          </div>
    </div>
  );
}

export default ListSemis;
