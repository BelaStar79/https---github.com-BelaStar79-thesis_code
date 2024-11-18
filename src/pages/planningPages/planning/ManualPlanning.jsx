import React, { useState } from "react";
// import css
import "../../components/structure/mainStructure.css";
import "../../components/formComponent/formComponent.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FormComponent from "../../components/formComponent/FormComponent.jsx";
import TableComponentTwo from "../../components/tableComponent/TableComponentTwo.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import {
  id_row,
  planificaciones,
  zonas,
  detallesManualPlaning,
} from "../../components/others/table.js";

export default function ManualPlanning() {
  // editable variables
  const namePage = "Planificación manual";
  const activeSection = "planning";
  const activeOption = "Planificación";

  // variable of details
  const planificacion = planificaciones[id_row];
  const namePlanning = planificacion.nombre_planificacion;
  const zonaPlanning = planificacion.nombre_region_guardia;
  const dateStartPlanning = planificacion.fecha_inicio;
  const dateEndPlanning = planificacion.fecha_fin;

  const zona = zonas[planificacion.id_zona - 1];
  const responsiblePerson = zona.responsable;
  const planner = zona.planificador;
  const active = zona.activo;

  const detalles = detallesManualPlaning[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPlanning = () => {
    navigate("/planning/planning");
  };

  const savePlanning = () => {
    console.log("Guardando datos...");
    goToPlanning();
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
              <strong>Detalles de la zona</strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__info">
                <p className="detailsContent__infoP">
                  <strong>Nombre:</strong> {zonaPlanning}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Responsable:</strong> {responsiblePerson}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Planificador:</strong> {planner}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Fecha inicio:</strong> {dateStartPlanning}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Fecha de fin:</strong> {dateEndPlanning}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Activo:</strong> {active}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Planificación:</strong> {namePlanning}
                </p>
              </div>

              <strong className="detailsContent__title">{namePage}</strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__labelsContainer">
                <label className="detailsContent__label">
                  Forma de planificación
                  <input
                    type="text"
                    placeholder="Por persona"
                    title="Introduzca la forma de planificación"
                  />
                </label>
                <label className="detailsContent__label">
                  Estructura
                  <input
                    type="text"
                    placeholder={zonaPlanning}
                    title="Introduzca la posta de la planificación"
                  />
                </label>
                <label className="detailsContent__label">
                  Fecha
                  <input
                    type="text"
                    placeholder={dateStartPlanning}
                    title="Introduzca la fecha de la planificación"
                  />
                </label>
                <label className="detailsContent__label">
                  Turno
                  <input
                    type="text"
                    placeholder="12 horas"
                    title="Introduzca el turno la planificación"
                  />
                </label>
                <label className="detailsContent__label">
                  Cantidad de personas por posta
                  <div className="detailsContent__label__box">
                    <input
                      type="text"
                      placeholder="3"
                      title="Introduzca la cantidad de personas"
                    />
                    <p>asignados</p>
                  </div>
                </label>
              </div>

              <div className="detailsContent__search">
                <FormComponent
                  search={
                    <input
                      className="detailsContent__searchInput"
                      type="text"
                      placeholder="Nombre"
                      title="Introduzca el nombre de la persona que desea buscar"
                    />
                  }
                  labels={
                    <>
                      <label htmlFor="" className="formComponent__label">
                        Sexo
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca el sexo"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Estructura
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la estructura"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Provincia
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la provincia"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Municipio
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca el municipio"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Categoría
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la caregoría"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Cargo
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la cargo"
                        />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Residente
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Residente"
                        />
                      </label>
                    </>
                  }
                />
                {/* <input
                  type="text"
                  placeholder="Nombre"
                  title="Introduzca el nombre de la persona que desea buscar"
                />
                <button className="detailsContent__searchButton">
                  <BsSearch className="detailsContent__searchIcon" />
                  <p className="detailsContent__searchP">Buscar</p>
                </button> */}
              </div>

              <TableComponentTwo
                tableName="Personas"
                columnNames={["Nombre", "CI", "Solapin", "Estructura", "Cargo"]}
                columns={["nombre", "ci", "solapin", "estructura", "cargo"]}
                data={detalles}
              />

              <div className="formComponent__buttons">
                <button
                  className="formComponent__button"
                  title="Guardar planificación"
                  onClick={() => savePlanning()}
                >
                  Aceptar
                </button>
                <button
                  className="formComponent__button"
                  title="Regresar sin guardar"
                  onClick={goToPlanning}
                >
                  Cancelar
                </button>
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
