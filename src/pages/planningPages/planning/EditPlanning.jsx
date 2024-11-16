import React, { useState, useEffect } from "react";
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

export default function EditPlanning() {
  // editable variables
  const namePage = "Editar planificación";
  const activeSection = "planning";
  const activeOption = "Planificación";

  // inputs variables
  const [nombre, setNombre] = useState();
  const [inicio, setInicio] = useState();
  const [fin, setFin] = useState();
  const [zona, setZona] = useState();

  // navigate metod
  const navigate = useNavigate();
  const goToPlanning = () => {
    navigate("/planning/planning");
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
                    title="Regresar a Planificación"
                    onClick={goToPlanning}
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
                          Nombre de la planificación
                          <input
                            value={nombre}
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Nombre"
                            title="Introduzca el nombre de la planificación"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre de la zona
                          <input
                            value={zona}
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Zona"
                            title="Introduzca la zona de la planificación"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Fecha de inicio
                          <input
                            value={inicio}
                            type="date"
                            className="formComponent__addInput"
                            title="Introduzca el nombre de la planificación que desea buscar"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Fecha de fin
                          <input
                            value={fin}
                            type="date"
                            className="formComponent__addInput"
                            title="Introduzca el nombre de la planificación que desea buscar"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title="Guardar planificación"
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToPlanning}
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
