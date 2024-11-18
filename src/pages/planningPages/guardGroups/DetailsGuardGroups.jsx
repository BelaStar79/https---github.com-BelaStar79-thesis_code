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
import { id_row, equipos, personas } from "../../components/others/table.js";

export default function DetailsGuardGroup() {
  // editable variables
  const namePage = "Detalles de grupo de guardia";
  const activeSection = "planning";
  const activeOption = "Zonas de guardia";
  const detailsName = "Datos de grupo de guardia";

  const equipo = equipos[id_row];
  const miembros = [
    {
      nombre: personas[equipo.ids_personas[0]].nombre,
      ci: personas[equipo.ids_personas[0]].ci,
      solapin: personas[equipo.ids_personas[0]].solapin,
      cargo: personas[equipo.ids_personas[0]].cargo,
      estructura: equipo.estructura,
    },
    {
      nombre: personas[equipo.ids_personas[1]].nombre,
      ci: personas[equipo.ids_personas[1]].ci,
      solapin: personas[equipo.ids_personas[1]].solapin,
      cargo: personas[equipo.ids_personas[1]].cargo,
      estructura: equipo.estructura,
    },
    {
      nombre: personas[equipo.ids_personas[2]].nombre,
      ci: personas[equipo.ids_personas[2]].ci,
      solapin: personas[equipo.ids_personas[2]].solapin,
      cargo: personas[equipo.ids_personas[2]].cargo,
      estructura: equipo.estructura,
    },
  ];

  // navigate metod
  const navigate = useNavigate();
  const goToGuardGroup = () => {
    navigate("/planning/guard-groups");
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
                    onClick={() => goToGuardGroup()}
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
                <p className="detailsContent__infoP">Nombre: {equipo.nombre}</p>
                <p className="detailsContent__infoP">
                  Estructura: {equipo.estructura}
                </p>
              </div>
              <TableComponentTwo
                tableName="Horarios y turnos asociados"
                columnNames={["Nombre", "CI", "Solapin", "Cargo", "Estructura"]}
                columns={["nombre", "ci", "solapin", "cargo", "estructura"]}
                data={miembros}
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
