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
import { id_row, usuarios } from "../../components/others/table.js";

export default function DetailsUsers() {
  // editable variables
  const namePage = "Detalles de usuario";
  const activeSection = "configuration";
  const activeOption = "Usuarios";
  const detailsName = "Datos del usuario";

  const p = usuarios[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToUsuarios = () => {
    navigate("/configuration/users");
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
                    onClick={goToUsuarios}
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
                  <strong>Solapin:</strong> {p.solapin}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Activo:</strong> {p.activo}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Usuario:</strong> {p.user}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Contraseña:</strong> {p.password}
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
