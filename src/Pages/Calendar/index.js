import React from "react";
import "./calendar.scss";

function Calendar() {
  return (
    <div className="calendar">
      <h1>Calendrier des semis</h1>
      <div className="calendar_legend">
        <span className="calendar_legend--brown"></span> <p> En pleine terre</p>
        <span className="calendar_legend--blue"></span>
        <p> Sous serre froide</p>
        <span className="calendar_legend--red"></span>
        <p> Sous serre chauffée</p>
      </div>

      <table>
        <thead>
          <tr>
            <td colSpan="1"></td>
            <td colSpan="1">Janvier</td>
            <td colSpan="1">Février</td>
            <td colSpan="1">Mars</td>
            <td colSpan="1">Avril</td>
            <td colSpan="1">Mai</td>
            <td colSpan="1">Juin</td>
            <td colSpan="1">Juillet</td>
            <td colSpan="1">Aout</td>
            <td colSpan="1">Septembre</td>
            <td colSpan="1">Octobre</td>
            <td colSpan="1">Novembre</td>
            <td colSpan="1">Décembre</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tomate</td>
            <td></td>
            <td></td>
            <td className="red"></td>
            <td className="red"></td>
            <td className="blue"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Laitue</td>
            <td></td>
            <td className="red"></td>
            <td className="blue"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Aubergine</td>
            <td></td>
            <td className="red"></td>
            <td className="red"></td>
            <td className="red"></td>
            <td className="blue"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Haricot</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="red"></td>
            <td className="red"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
                  </tr>
                  <tr>
            <td>Melon</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="red"></td>
            <td className="red"></td>
            <td className="brown"></td>
            <td className="brown"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
