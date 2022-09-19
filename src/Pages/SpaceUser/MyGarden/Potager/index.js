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
import DialogDeleteConfirm from "./DialogConfirmDeleteCarre";
import DialogDeleteConfirmPlant from "./DialogConfirmDeletePlant";

function Potager() {
  // Context
  const { listPotager, fetchDataPotager } = useContext(GetDataPotagerContext);
  const { deleteConfirm, setDeleteConfirm } = useContext(DeletePotagerContext);
  const { deletePlant, deleteConfirmPlant, setDeleteConfirmPlant } =
    useContext(DeletePlantContext);
  // state for get name and id for deleting a carre
  const [idCarre, setIdCarre] = useState(null);
  const [nameCarre, setNameCarre] = useState(null);
  // state for get name and id for deleting a plant
  const [idPlant, setIdPlant] = useState(null);
  const [namePlant, setNamePlant] = useState(null);

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
                        setIdCarre(list.id);
                        setNameCarre(list.name);
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
                                  setDeleteConfirmPlant(true);
                                  setIdPlant(items.id);
                                  setNamePlant(items.name);
                                }}
                              />
                            </div>
                          );
                        } else {
                          return <p key={id}></p>;
                        }
                      })}
                  </div>
                  {deleteConfirmPlant && (
                    <>
                      <DialogDeleteConfirmPlant
                        namePlant={namePlant}
                        idPlant={idPlant}
                      />
                    </>
                  )}
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm
                        nameCarre={nameCarre}
                        idCarre={idCarre}
                      />
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
                        setIdCarre(list.id);
                        setNameCarre(list.name);
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
                                setDeleteConfirmPlant(true);
                                setIdPlant(items.id);
                                setNamePlant(items.name);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirmPlant && (
                    <>
                      <DialogDeleteConfirmPlant
                        namePlant={namePlant}
                        idPlant={idPlant}
                      />
                    </>
                  )}
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm
                        nameCarre={nameCarre}
                        idCarre={idCarre}
                      />
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
                        setIdCarre(list.id);
                        setNameCarre(list.name);
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
                                setDeleteConfirmPlant(true);
                                setIdPlant(items.id);
                                setNamePlant(items.name);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirmPlant && (
                    <>
                      <DialogDeleteConfirmPlant
                        namePlant={namePlant}
                        idPlant={idPlant}
                      />
                    </>
                  )}
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm
                        nameCarre={nameCarre}
                        idCarre={idCarre}
                      />
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
                        setIdCarre(list.id);
                        setNameCarre(list.name);
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
                                setDeleteConfirmPlant(true);
                                setIdPlant(items.id);
                                setNamePlant(items.name);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirmPlant && (
                    <>
                      <DialogDeleteConfirmPlant
                        namePlant={namePlant}
                        idPlant={idPlant}
                      />
                    </>
                  )}
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm
                        nameCarre={nameCarre}
                        idCarre={idCarre}
                      />
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
                        setIdCarre(list.id);
                        setNameCarre(list.name);
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
                                setDeleteConfirmPlant(true);
                                setIdPlant(items.id);
                                setNamePlant(items.name);
                              }}
                            />
                          </div>
                        );
                      } else {
                        return <p key={id}></p>;
                      }
                    })}
                  </div>
                  {deleteConfirmPlant && (
                    <>
                      <DialogDeleteConfirmPlant
                        namePlant={namePlant}
                        idPlant={idPlant}
                      />
                    </>
                  )}
                  {deleteConfirm && (
                    <>
                      <DialogDeleteConfirm
                        nameCarre={nameCarre}
                        idCarre={idCarre}
                      />
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
