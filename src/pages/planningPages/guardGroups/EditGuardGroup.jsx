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
import { id_row, equipos } from "../../components/others/table.js";

export default function EditGuardGroup() {
  // editable variables
  const namePage = "Modificar grupo de guardia";
  const activeSection = "planning";
  const activeOption = "Grupos de guardia";

  // get data of planificaciones
  const equipo = equipos[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPGuardGroup = () => {
    navigate("/planning/guard-groups");
  };

  // save guard area
  const saveGuardGroup = () => {
    console.log("Guardando datos...");
    goToPGuardGroup();
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
                    onClick={goToPGuardGroup}
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
                          Nombre
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={equipo.nombre}
                            title="Introduzca el nuevo nombre del equipo"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre de la estructura
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={equipo.estructura}
                            title="Introduzca la nueva estructura"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={saveGuardGroup}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToPGuardGroup}
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
