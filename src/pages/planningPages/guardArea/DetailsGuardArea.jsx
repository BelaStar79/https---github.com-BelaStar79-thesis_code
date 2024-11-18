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
import {
  zonas,
  id_row,
  id_rowTwo,
  horario_turno,
} from "../../components/others/table.js";

export default function DetailsGuardArea() {
  // editable variables
  const namePage = "Detalles de zona de guardia";
  const activeSection = "planning";
  const activeOption = "Zonas de guardia";
  const detailsName = "Datos de la zona de guardia";

  const zona = zonas[id_row];
  const ht = horario_turno[id_rowTwo];

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
                    title={`Regresar a ` + activeOption}
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
                <p className="detailsContent__infoP">Nombre: {zona.nombre}</p>
                <p className="detailsContent__infoP">
                  Responsable: {zona.responsable}
                </p>
                <p className="detailsContent__infoP">
                  Planificador: {zona.planificador}
                </p>
                <p className="detailsContent__infoP">Activo: {zona.activo}</p>
              </div>
              <TableComponentTwo
                tableName="Horarios y turnos asociados"
                columnNames={["Posta", "Horario", "Turno"]}
                columns={["posta", "horario", "turno"]}
                data={ht}
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
