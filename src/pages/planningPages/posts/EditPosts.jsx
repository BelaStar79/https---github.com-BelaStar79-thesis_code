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
import {
  estructuras,
  id_row,
  posta,
  zonas,
} from "../../components/others/table.js";

export default function EditPosts() {
  // editable variables
  const namePage = "Modificar posta";
  const activeSection = "planning";
  const activeOption = "Posta";

  // get data of planificaciones
  const p = posta[id_row];

  // navigate metod
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate("/planning/posts");
  };

  // save guard area
  const savePosts = () => {
    console.log("Guardando datos...");
    goToPosts();
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
                    title="Regresar a Planificación"
                    onClick={goToPosts}
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
                          Nombre de la posta
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={p.nombre}
                            title="Introduzca el nuevo nombre del responsable"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Zona
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={
                              zonas[
                                estructuras[p.id_estructura - 1].id_zona - 1
                              ].nombre
                            }
                            title="Introduzca la nueva zona"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Lugar
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={p.estructura}
                            title="Introduzca la nueva estructura"
                          />
                        </label>
                        <label htmlFor="" className="formComponent__addLabel">
                          Cantidad de personas
                          <input
                            type="text"
                            className="formComponent__addInput"
                            placeholder={p.cantidad}
                            title="Introduzca la nueva cantidad"
                          />
                        </label>
                      </div>

                      <div className="formComponent__buttons">
                        <button
                          className="formComponent__button"
                          title="Guardar planificación"
                          onClick={savePosts}
                        >
                          Aceptar
                        </button>
                        <button
                          className="formComponent__button"
                          title="Regresar sin guardar"
                          onClick={goToPosts}
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
