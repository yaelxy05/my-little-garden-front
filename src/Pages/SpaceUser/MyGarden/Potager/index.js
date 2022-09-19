import React, { useContext, useEffect, useState } from "react";
// import SCSS
import "./potager.scss";
// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Import Context
import {
  GetDataPotagerContext,
  DeletePotagerContext,
  DeletePlantContext,
} from "../../../../Utils/Context/potager";
import DialogDeleteConfirm from "./DialogConfirmDelete";

function Potager() {
  // Context
  const { listPotager, fetchDataPotager } = useContext(GetDataPotagerContext);
  const { deleteConfirm, setDeleteConfirm } =
    useContext(DeletePotagerContext);
  const { deletePlant } = useContext(DeletePlantContext);
  // state for get name and id for deleting a carre 
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    fetchDataPotager();
  }, [fetchDataPotager]);

  return (
    <section className="potager">
      <h2>Plan du potager</h2>
      <div className="potager_plan">
        {listPotager &&
          listPotager.map((list, index) => {
            if (list.size === 33) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre33">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        setDeleteConfirm(true);
                        setId(list.id);
                        setName(list.name);
                      }}
                    />
                    {list.plants.length !== 0 &&
                      list.plants.map((items, id) => {
                        const family = items.family;
                        if (items.family !== "") {
                          return (
                            <div key={id} className="plant_box">
                              <img
                                src={require(`../../../../assets/img/legume/${family}.jpg`)}
                                alt={items.family}
                              />
                              <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => {
                                  deletePlant(items.id);
                                }}
                              />
                            </div>
                          );
                        } else {
                          return <p key={id}></p>;
                        }
                      })}
                  </div>

                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm name={name} id={id} />
                    </>
                  )}
                </div>
              );
            } else if (list.size === 25) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre25">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        setDeleteConfirm(true);
                        setId(list.id);
                        setName(list.name);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm name={name} id={id} />
                    </>
                  )}
                </div>
              );
            } else if (list.size === 24) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre24">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        setDeleteConfirm(true);
                        setId(list.id);
                        setName(list.name);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm name={name} id={id} />
                    </>
                  )}
                </div>
              );
            } else if (list.size === 35) {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre carre35">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        setDeleteConfirm(true);
                        setId(list.id);
                        setName(list.name);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm name={name} id={id} />
                    </>
                  )}
                </div>
              );
            } else {
              return (
                <div key={index} className="potager_carre--box">
                  <h3>
                    {list.name}
                    <span className="potager_size">
                      {" taille du carré : " + list.size}
                    </span>
                  </h3>
                  <div className="potager_carre">
                    <FontAwesomeIcon
                      id="trashIcon"
                      icon={faXmark}
                      onClick={() => {
                        setDeleteConfirm(true);
                        setId(list.id);
                        setName(list.name);
                      }}
                    />
                    {list.plants.map((items, id) => {
                      const family = items.family;
                      if (items.family !== "") {
                        return (
                          <div key={id} className="plant_box">
                            <img
                              src={require(`../../../../assets/img/legume/${family}.jpg`)}
                              alt={items.family}
                            />
                            <FontAwesomeIcon
                              icon={faXmark}
                              onClick={() => {
                                deletePlant(items.id);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm name={name} id={id} />
                    </>
                  )}
                </div>
              );
            }
          })}
      </div>
    </section>
  );
}

export default Potager;
