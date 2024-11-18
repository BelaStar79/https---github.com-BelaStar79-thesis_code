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
  zonas,
  id_row,
  recurso,
  estructuras,
  posta,
} from "../../components/others/table.js";

export default function DetailsPosts() {
  // editable variables
  const namePage = "Detalles de posta";
  const activeSection = "planning";
  const activeOption = "Postas";
  const detailsName = "Datos de posta";

  const p = posta[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate("/planning/posts");
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
                    onClick={() => goToPosts()}
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
                <p className="detailsContent__infoP">Nombre: {p.nombre}</p>
                <p className="detailsContent__infoP">Lugar: {p.estructura}</p>
                <p className="detailsContent__infoP">
                  Zona:
                  {zonas[estructuras[p.id_estructura - 1].id_zona - 1].nombre}
                </p>
                <p className="detailsContent__infoP">
                  Cantidad de personas: {p.cantidad}
                </p>
                <p className="detailsContent__infoP">Activo: {p.activo}</p>
                <p className="detailsContent__infoP">
                  Descripción: {p.descripcion}
                </p>
              </div>
              <TableComponentTwo
                tableName="Horarios y turnos asociados"
                columnNames={["Nombre", "Valor"]}
                columns={["nombre", "valor"]}
                data={recurso}
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
