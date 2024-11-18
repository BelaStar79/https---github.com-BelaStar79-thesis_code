import React, { useState, useContext } from "react";
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
import { id_row, planificaciones } from "../../components/others/table.js";

export default function EditPlanning() {
  // editable variables
  const namePage = "Editar planificación";
  const activeSection = "planning";
  const activeOption = "Planificación";

  // get data of planificaciones
  const planification = planificaciones[id_row];

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

  // save plannindg
  const savePlanning = () => {
    console.log("Guardando datos...");
    goToPlanning();
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
                            placeholder={planification.nombre_planificacion}
                            onChange={(e) => setNombre(e.target.value)}
                            title="Introduzca el nuevo nombre de la planificación"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre de la zona
                          <input
                            value={zona}
                            type="text"
                            className="formComponent__addInput"
                            placeholder={planification.nombre_region_guardia}
                            onChange={(e) => setZona(e.target.value)}
                            title="Introduzca la nueva zona de la planificación"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Fecha de inicio
                          <input
                            value={inicio}
                            className="formComponent__addInput"
                            placeholder={planification.fecha_inicio}
                            onChange={(e) => setInicio(e.target.value)}
                            title="Introduzca la nueva fecha de inicio de la planificación"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Fecha de fin
                          <input
                            value={fin}
                            className="formComponent__addInput"
                            placeholder={planification.fecha_fin}
                            onChange={(e) => setFin(e.target.value)}
                            title="Introduzca la nueva fecha de fin de la planificación"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title="Guardar planificación"
                          onClick={savePlanning}
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
