import React, { useState, useEffect } from "react";
// import css
import "../../components/structure/mainStructure.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import TableComponentTwo from "../../components/tableComponent/TableComponentTwo.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import { details } from "../../components/others/table.js";

export default function DetailsPlanning() {
  // editable variables
  const namePage = "Detalles de planificación";
  const activeSection = "planning";
  const activeOption = "Planificación";
  const detailsName = "Datos de la planificación";

  // variable of details
  const namePlanning = "Nombre de la planificación";
  const zonaPlanning = "Zona de guardia";
  const statePlanning = "Estado";
  const dateStarPlanning = "00/00/0000";
  const dateEndPlanning = "00/00/0000";

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
                    title="Regresar a Planificación"
                    onClick={goToPlanning}
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
                <p className="detailsContent__infoP">Nombre: {namePlanning}</p>
                <p className="detailsContent__infoP">
                  Zona de guardia: {zonaPlanning}
                </p>
                <p className="detailsContent__infoP">
                  Estado de planificación: {statePlanning}
                </p>
                <p className="detailsContent__infoP">
                  Fecha de inicio: {dateStarPlanning}
                </p>
                <p className="detailsContent__infoP">
                  Fecha de fin: {dateEndPlanning}
                </p>
              </div>
              <TableComponentTwo
                tableName={activeOption}
                columnNames={["Nombre", "Posta", "Turnos", "Fecha"]}
                columns={["nombre_posta", "nombre_turnos", "fecha"]}
                data={details}
              />
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
