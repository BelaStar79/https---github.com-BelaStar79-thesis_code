import React, { useState } from "react";
// import css
import "../../components/structure/mainStructure.css";
import "../../components/formComponent/formComponent.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";

export default function AddAssistance() {
  // editable variables
  const namePage = "Añadir asistencia";
  const activeSection = "control";
  const activeOption = "Asistencia";

  // navigate metod
  const navigate = useNavigate();
  const goToAssistance = () => {
    navigate("/control/assistance");
  };

  // save incident
  const saveAssistance = () => {
    console.log("Guardando datos...");
    goToAssistance();
  };

  return (
    <>
      <div className="pageStructure">
        <div className="pageStructure__companyBelt">
          <CompanyBelt />
        </div>
        <div className="pageStructure__bigContainer">
          <div className="pageStructure__sideMenu">
            <SideMenu
              activeSection={activeSection}
              activeOption={activeOption}
            />
          </div>
          <div className="pageStructure__container">
            <TitleBar
              title={namePage}
              titleBarButtons={
                <>
                  <button
                    className="titleBar__button"
                    title={`Regresar a ` + activeOption}
                    onClick={() => goToAssistance()}
                  >
                    <BsBackspace className="titleBar__icon" />
                  </button>
                </>
              }
            />

            <section className="formComponent__bigContainer">
              <div className="formComponent__container">
                <div className="formComponent__add">
                  <form action="" className="formComponent__addForm">
                    <div className="formComponent__addFormContainer">
                      <div className="formComponent__addInput">
                        <label htmlFor="" className="formComponent__addLabel">
                          Turno
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Introduzca el turno"
                            title="Introduzca el turno"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Posta
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Introduzca la posta"
                            title="Introduzca la posta"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Introduzca el nombre"
                            title="Introduzca el nombre"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Estructura
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Introduzca la estructura"
                            title="Introduzca la estructura"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Cantidad de personas
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Introduzca la cantidad de personas"
                            title="Introduzca la cantidad de personas"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveAssistance()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={() => goToAssistance()}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="pageStructure__footer">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
