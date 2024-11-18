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

export default function AddConfigurationVariables() {
  // editable variables
  const namePage = "Añadir variable";
  const activeSection = "configuration";
  const activeOption = "Configuraciones de variables";

  // navigate metod
  const navigate = useNavigate();
  const goToConfigurationVariable = () => {
    navigate("/configuration/configuration-variables");
  };

  // save incidents
  const saveConfigurationVariable = () => {
    console.log("Guardando datos...");
    goToConfigurationVariable();
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
                    onClick={goToConfigurationVariable}
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
                          Nombre de la variable
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Nombre"
                            title="Introduzca el nombre de la variale"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Activo
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder="Digite si la variable es activa o no"
                            title="Introduzca si la variable es activa o no"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveConfigurationVariable()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToConfigurationVariable}
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
