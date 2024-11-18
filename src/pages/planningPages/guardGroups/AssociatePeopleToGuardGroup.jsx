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
  personas,
  equipos,
  empty_list,
} from "../../components/others/table.js";

export default function AssociatePeopleToGuardGroup() {
  // editable variables
  const namePage = "Asociar personas a grupos de guardia";
  const activeSection = "planning";
  const activeOption = "Grupos de guardia";

  // variable of details
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

  const saveGuardGroup = () => {
    console.log("Guardando datos...");
    goToGuardGroup();
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
                    onClick={goToGuardGroup}
                  >
                    <BsBackspace className="titleBar__icon" />
                  </button>
                </>
              }
            />

            <div className="detailsContent">
              <strong>Datos de grupo de guardia</strong>

              <hr className="detailsContent__hr" />

              <div className="detailsContent__info">
                <p className="detailsContent__infoP">
                  <strong>Nombre:</strong> {equipo.nombre}
                </p>
                <p className="detailsContent__infoP">
                  <strong>Máximo numero de personas:</strong> 200
                </p>
                <p className="detailsContent__infoP">
                  <strong>Estructura:</strong> {equipo.estructura}
                </p>
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
                        Cargo
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la cargo"
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
                    </>
                  }
                />
              </div>

              <TableComponentTwo
                tableName="Personas"
                columnNames={["Nombre", "CI", "Solapin", "Estructura", "Cargo"]}
                columns={["nombre", "ci", "solapin", "estructura", "cargo"]}
                data={miembros}
              />

              <div className="formComponent__buttons btn">
                <button className="formComponent__button not" title="Asociar">
                  Asociar
                </button>
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
                        Cargo
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la cargo"
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
                    </>
                  }
                />
              </div>

              <TableComponentTwo
                tableName="Personas asociadas"
                columnNames={["Nombre", "CI", "Solapin", "Estructura", "Cargo"]}
                columns={["nombre", "ci", "solapin", "estructura", "cargo"]}
                data={empty_list}
              />

              <div className="formComponent__buttons">
                <button
                  className="formComponent__button"
                  title={`Guardar y regresar a ` + activeOption}
                  onClick={() => saveGuardGroup()}
                >
                  Aceptar
                </button>
                <button
                  className="formComponent__button"
                  title="Regresar sin guardar"
                  onClick={goToGuardGroup}
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
