import React from "react";
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
  id_row,
  planificaciones,
  detallesPlanificaciones,
} from "../../components/others/table.js";

export default function DetailsPlanning() {
  // editable variables
  const namePage = "Detalles de planificación";
  const activeSection = "planning";
  const activeOption = "Planificación";
  const detailsName = "Datos de la planificación";

  // variable of details
  const planificacion = planificaciones[id_row];
  const namePlanning = planificacion.nombre_planificacion;
  const zonaPlanning = planificacion.nombre_region_guardia;
  const statePlanning = "Creada";
  const dateStarPlanning = planificacion.fecha_inicio;
  const dateEndPlanning = planificacion.fecha_fin;

  const detalles = detallesPlanificaciones[id_row];

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
                    title={`Regresar a ` + activeOption}
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
                <p className="detailsContent__infoP">
                  <strong>Nombre:</strong> {namePlanning}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Zona de guardia:</strong> {zonaPlanning}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Estado de planificación:</strong> {statePlanning}
                </p>

                <p className="detailsContent__infoP">
                  <strong>Fecha de inicio:</strong> {dateStarPlanning}
                </p>

                <p className="detailsContent__infoP">
                  <strong>Fecha de fin:</strong> {dateEndPlanning}
                </p>
              </div>

              <TableComponentTwo
                tableName={activeOption}
                columnNames={["Nombre", "Posta", "Turnos", "Fecha"]}
                columns={["nombre", "posta", "turnos", "fecha"]}
                data={detalles}
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
