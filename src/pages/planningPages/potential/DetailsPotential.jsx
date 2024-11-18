import React from "react";
// import css
import "../../components/structure/mainStructure.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import { id_row, potencial } from "../../components/others/table.js";

export default function DetailsPotential() {
  // editable variables
  const namePage = "Detalles del potencial";
  const activeSection = "planning";
  const activeOption = "Potencial";
  const detailsName = "Datos de la persona";

  const p = potencial[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPotential = () => {
    navigate("/planning/potential");
  };

  return (
    <>
      <div className="pageStructure">
        <div className="pageStructure__companyBelt">
          <CompanyBelt />
        </div>
        <div className="pageStructure__bigContainer pageStructure__bigContainer--details">
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
                    onClick={goToPotential}
                  >
                    <BsBackspace className="titleBar__icon" />
                  </button>
                </>
              }
            />

            <div className="detailsContent">
              <strong>{detailsName}</strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__info">
                <p className="detailsContent__infoP">
                  <strong>Nombre:</strong> {p.nombre}
                </p>
                <p className="detailsContent__infoP">
                  <strong>CI:</strong> {p.ci}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Solapin:</strong> {p.solapin}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Id. Expediente:</strong> {p.expediente}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Sexo:</strong> {p.sexo}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Residente:</strong> {p.residente}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Provincia:</strong> {p.provincia}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Municipio:</strong> {p.municipio}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Estructura:</strong> {p.estructura}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Categoría:</strong> {p.categoria}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pageStructure__footer">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
