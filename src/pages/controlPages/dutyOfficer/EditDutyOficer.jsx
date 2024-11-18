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
import { id_row, duty_officer } from "../../components/others/table.js";

export default function EditDutyOfficer() {
  // editable variables
  const namePage = "Editar oficial de guardia";
  const activeSection = "control";
  const activeOption = "Oficial de guardia superior";
  const officer = duty_officer[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToDutyOfficer = () => {
    navigate("/control/duty-officer/");
  };

  // save plannindg
  const saveDutyOfficer = () => {
    console.log("Guardando datos...");
    goToAddDutyOfficer();
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
                    onClick={goToDutyOfficer}
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
                          Fecha
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={officer.fecha}
                            title="Introduzca la fecha"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Oficial de guardia
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={officer.nombre}
                            title="Introduzca al oficial de guardia"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Cantidad de personas
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={officer.cantidad}
                            title="Introduzca la cantidad de personas"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Cantidad real de personas
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={officer.cantidadReal}
                            title="Introduzca la cantidad real de personas"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveDutyOfficer()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToDutyOfficer}
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
