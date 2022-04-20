import React, { useState, useEffect } from "react";
// import SCSS
import "./potager.scss";
// Import package
import axios from "axios";

function Potager() {
  const [listPotager, setListPotager] = useState([]);

  const token = localStorage.getItem("token");
  const API_URLS = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getPotagerList = () => {
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
    };
    getPotagerList();
  }, []);
  return (
    <section className="potager">
      <h2>Plan du potager</h2>
      <div className="potager_plan">
        {listPotager &&
          listPotager.map((list, index) => {
            if (list.size === 33) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>{list.name}</h3>
                  <div className="potager_carre carre33">
                    {list.plants.map((items, id) => {
                      const family = items.family;

                      return (
                        <img
                          key={id}
                          src={require(`../../../../assets/img/legume/${family}.jpg`)}
                          alt={items.family}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            } else if (list.size === 25) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>{list.name}</h3>
                  <div className="potager_carre carre25">
                    {list.plants.map((items, id) => {
                      return <p key={id}>{items.family}</p>;
                    })}
                  </div>
                </div>
              );
            } else if (list.size === 24) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>{list.name}</h3>
                  <div className="potager_carre carre25">
                    {list.plants.map((items,id) => {
                      return <p key={id}>{items.family}</p>;
                    })}
                  </div>
                </div>
              );
            } else if (list.size === 35) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>{list.name}</h3>
                  <div className="potager_carre carre25">
                    {list.plants.map((items, id) => {
                      return <p key={id}>{items.family}</p>;
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>{list.name}</h3>
                  <div className="potager_carre">
                    {list.plants.map((items, id) => {
                      return <p key={id}>{items.family}</p>;
                    })}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

export default Potager;
