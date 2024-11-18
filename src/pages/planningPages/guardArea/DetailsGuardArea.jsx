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

export default function DetailsGuardArea() {
  // editable variables
  const namePage = "Detalles de zona de guardia";
  const activeSection = "planning";
  const activeOption = "Zona de guardia";
  const detailsName = "Datos de la zona de guardia";

  // variable of details
  const nameGuardArea = "Nombre de la zona";
  const responsibleGuardArea = "Nombre del responsable";
  const plannerGuardArea = "Nombre del planificador";
  const activeGuardArea = "Si";

  // navigate metod
  const navigate = useNavigate();
  const goToGuardArea = () => {
    navigate("/planning/guard-area");
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
                    onClick={goToGuardArea}
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
                <p className="detailsContent__infoP">Nombre: {nameGuardArea}</p>
                <p className="detailsContent__infoP">
                  Nombre del responsable: {responsibleGuardArea}
                </p>
                <p className="detailsContent__infoP">
                  Nombre del planificador: {plannerGuardArea}
                </p>
                <p className="detailsContent__infoP">
                  Activo: {activeGuardArea}
                </p>
              </div>
              <TableComponentTwo
                tableName="Horarios y turnos asociados"
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
