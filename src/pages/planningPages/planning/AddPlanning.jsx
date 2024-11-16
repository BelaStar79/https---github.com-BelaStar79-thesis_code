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
import { BsSearch, BsBackspace } from "react-icons/bs";

export default function AddPlanning() {
  // editable variables
  const namePage = "Añadir planificación";
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
                <div className="formComponent__search">
                  <form action="" className="formComponent__searchForm">
                    <div className="formComponent__searchFormContainer">
                      <div className="formComponent__searchInputs">
                        <input
                          value={nombre}
                          type="text"
                          className="formComponent__input formComponent__searchInput"
                          placeholder="Nombre"
                          title="Introduzca el nombre de la planificación"
                        />
                        <input
                          value={zona}
                          type="text"
                          className="formComponent__input formComponent__searchInput"
                          placeholder="Zona"
                          title="Introduzca la zona de la planificación"
                        />
                        <input
                          value={inicio}
                          type="date"
                          className="formComponent__input formComponent__searchInput"
                          title="Introduzca el nombre de la planificación que desea buscar"
                        />
                        <input
                          value={fin}
                          type="date"
                          className="formComponent__input formComponent__searchInput"
                          title="Introduzca el nombre de la planificación que desea buscar"
                        />
                      </div>
                      <button
                        className="formComponent__searchButton"
                        title="Realizar búsqueda"
                      >
                        <BsSearch className="formComponent__searchIcon" />
                        <p className="formComponent__searchP">Buscar</p>
                      </button>
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
