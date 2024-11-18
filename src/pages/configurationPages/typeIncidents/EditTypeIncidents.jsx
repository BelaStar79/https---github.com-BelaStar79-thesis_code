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
import { id_row, tipo_incidencia } from "../../components/others/table.js";

export default function EditTypeIncidents() {
  // editable variables
  const namePage = "Modificar tipo de incidencia";
  const activeSection = "configuration";
  const activeOption = "Tipos de incidencia";
  const i = tipo_incidencia[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToTypeIncidents = () => {
    navigate("/configuration/type-incidents");
  };

  // save incidents
  const saveTypeIncidents = () => {
    console.log("Guardando datos...");
    goToTypeIncidents();
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
                    onClick={goToTypeIncidents}
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
                          Nombre de la incidencia
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.nombre}
                            title="Introduzca el nombre de la incidencia"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Descripción de la incidencia
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.descripcion}
                            title="Introduzca la descripción de la incidencia"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Activo
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={i.activo}
                            title="Introduzca si la incidencia es activa o no"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveTypeIncidents()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToTypeIncidents}
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
