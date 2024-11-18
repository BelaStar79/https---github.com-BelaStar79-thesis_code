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
  id_rowTwo,
  guard_area,
  zonas,
  horario_turno,
} from "../../components/others/table.js";

export default function ShiftsAndSchedules() {
  // editable variables
  const namePage = "Asociar horarios y turnos a zonas de guardia";
  const activeSection = "planning";
  const activeOption = "Zonas de guardia";

  // variable of details
  const ga = guard_area[id_rowTwo];
  const ht = horario_turno[id_rowTwo];

  // navigate metod
  const navigate = useNavigate();
  const goToGuardArea = () => {
    navigate("/planning/guard-area");
  };

  const saveGuardArea = () => {
    console.log("Guardando datos...");
    goToGuardArea();
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
              <strong>Detalles de la zona de guardia</strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__info">
                <p className="detailsContent__infoP">
                  <strong>Nombre:</strong> {zonas[id_row].nombre}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Responsable:</strong> {ga.nombre}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Planificador:</strong> {zonas[id_row].planificador}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Activo:</strong> {zonas[id_row].activo}
                </p>
              </div>

              <strong className="detailsContent__title">
                Horario y turnos
              </strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__labelsContainer">
                <label className="detailsContent__label">
                  Horario
                  <input
                    type="text"
                    placeholder="07:00 pm"
                    title="Introduzca el horario"
                  />
                </label>
                <label className="detailsContent__label">
                  Turno
                  <input
                    type="text"
                    placeholder="12 horas"
                    title="Introduzca el turno"
                  />
                </label>
              </div>

              <div className="formComponent__buttons btn">
                <button
                  className="formComponent__button"
                  title={`Guardar y regresar a ` + activeOption}
                  onClick={() => saveGuardArea()}
                >
                  Asociar
                </button>
              </div>

              <TableComponentTwo
                tableName="Horarios y tuenos asociados"
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
