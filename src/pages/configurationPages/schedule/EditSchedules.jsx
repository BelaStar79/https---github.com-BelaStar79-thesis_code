import React from "react";
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
import { id_row, tipos_horarios } from "../../components/others/table.js";

export default function goToEditSchedule() {
  // editable variables
  const namePage = "Modificar horario";
  const activeSection = "configuration";
  const activeOption = "Horarios";
  const i = tipos_horarios[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToSchedules = () => {
    navigate("/configuration/schedules");
  };

  // save schedules
  const saveSchedules = () => {
    console.log("Guardando datos...");
    goToSchedules();
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
                    onClick={goToSchedules}
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
                          Nombre del horario
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.nombre}
                            title="Introduzca el nombre del horario"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Hora de inicio
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.inicio}
                            title="Introduzca la hora de la incidencia"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Hora de fin
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.fin}
                            title="Introduzca la hora de fin"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Activo
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.activo}
                            title="Introduzca si el horario está activo o no"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveSchedules()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToSchedules}
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
