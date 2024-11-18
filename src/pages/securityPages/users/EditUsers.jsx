import React from "react";
// import css
import "../../components/structure/mainStructure.css";
import "../../components/formComponent/formComponent.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import { id_row, usuarios } from "../../components/others/table.js";

export default function EditUsers() {
  // editable variables
  const namePage = "Modificar usuario";
  const activeSection = "configuration";
  const activeOption = "Usuarios";
  const user = usuarios[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToUsers = () => {
    navigate("/configuration/users");
  };

  // save users
  const saveUsers = () => {
    console.log("Guardando datos...");
    goToUsers();
  };

  return (
    <>
      <div className="pageStructure">
        <div className="pageStructure__companyBelt">
          <CompanyBelt />
        </div>
        <div className="pageStructure__bigContainer">
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
                    onClick={() => goToUsers()}
                  >
                    <BsBackspace className="titleBar__icon" />
                  </button>
                </>
              }
            />

            <section className="formComponent__bigContainer">
              <div className="formComponent__container">
                <div className="formComponent__add">
                  <form action="" className="formComponent__addForm">
                    <div className="formComponent__addFormContainer">
                      <div className="formComponent__addInput">
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={user.nombre}
                            title="Introduzca el nombre"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Nombre de usuario
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={user.user}
                            title="Introduzca el usuario"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Contraseña
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={user.password}
                            title="Introduzca la contraseña"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title={`Guardar y regresar a ` + activeOption}
                          onClick={() => saveUsers()}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={() => goToUsers()}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="pageStructure__footer">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
