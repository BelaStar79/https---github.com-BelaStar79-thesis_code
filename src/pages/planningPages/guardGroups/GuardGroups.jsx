import React, { useState, useEffect } from "react";
// import css
import "../../components/structure/mainStructure.css";
import "../../components/formComponent/formComponent.css";
import "../../components/tableComponent/tableComponent.css";
// import components
import CompanyBelt from "../../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import TitleBar from "../../components/titleBar/TitleBar.jsx";
import FooterComponent from "../../components/footerComponent/FooterComponent.jsx";
// others imports
import { useNavigate } from "react-router-dom";
import {
  BsPlusCircle,
  BsFileEarmarkPdf,
  BsSearch,
  BsChevronRight,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronBarRight,
  BsEye,
  BsPencil,
  BsTrash3,
  BsPersonPlus,
  BsPersonLock,
  BsFileEarmarkExcel,
} from "react-icons/bs";
import {
  setIdRow,
  setIdRowTwo,
  equipos,
} from "../../components/others/table.js";

export default function GuardGroups() {
  // editable variables
  const namePage = "Grupo de guardia";
  const activeSection = "planning";
  const activeOption = "Grupos de guardia";
  const tableName = "Grupos de guardia";
  const columnNames = ["Nombre", "Estructura", "No. personas asociadas"];
  const columns = ["nombre", "estructura", "cantidad"];

  // inputs variables
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [actualPage, setActualPage] = useState(1);

  // navigate metod
  const navigate = useNavigate();
  const goToAddGuardGroup = () => {
    navigate("add/");
  };
  const goToDetailsGuardGroup = (id) => {
    setIdRow(id - 1);
    navigate(`/planning/guard-groups/details/`);
  };
  const goToEditGuardGroup = () => {
    navigate("/planning/guard-groups/edit/");
  };

  const deleteGuardGroup = () => {
    console.log("Eliminando datos...");
  };

  // title variable
  const [pageTitle, setPageTitle] = useState(false);

  // others variables for table
  const [totalPages, setTotalPages] = useState(
    Math.ceil(equipos?.length / rowsPerPage)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(false);
  const [count, setCount] = useState(1);

  // form metod
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // useEffect metod
  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | " + namePage;
    fetchData();
  }, [pageTitle, rowsPerPage]);

  // table metod
  const fetchData = () => {
    try {
      setIsLoading(false);
      setHasData(true);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setIsLoading(false);
      setHasData(true);
    }
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setRowsPerPage(value);
    setTotalPages(Math.ceil(equipos?.length / parseInt(value)));

    setCurrentPage(1);
  };
  const handlePageChange = (newValue) => {
    const pageNumber = parseInt(newValue);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setActualPage(pageNumber);
      setCurrentPage(pageNumber);
      setCount(calculateNewCount(pageNumber));
    }
  };
  const calculateNewCount = (newPage) => {
    return rowsPerPage * newPage - (rowsPerPage - 1);
  };
  const handleNavigation = (direction) => {
    let newPage;
    switch (direction) {
      case "first":
        setCurrentPage(1);
        setActualPage(1);
        newPage = 1;
        break;
      case "prev":
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
        setActualPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
        newPage = actualPage > 1 ? actualPage - 1 : 1;
        break;
      case "next":
        setCurrentPage((prevPage) =>
          prevPage < totalPages ? prevPage + 1 : totalPages
        );
        setActualPage((prevPage) =>
          prevPage < totalPages ? prevPage + 1 : totalPages
        );
        newPage = actualPage < totalPages ? actualPage + 1 : totalPages;
        break;
      case "last":
        setCurrentPage(totalPages);
        setActualPage(totalPages);
        newPage = totalPages;
        break;
    }
    setCount(calculateNewCount(newPage));
  };
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;
  const filteredData = equipos?.slice(startIndex, endIndex);
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (!hasData) {
    return <div>No hay datos disponibles</div>;
  }

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
                    title="Añadir una nuevo grupo"
                    onClick={goToAddGuardGroup}
                  >
                    <BsPlusCircle className="titleBar__icon" />
                  </button>
                  <button className="titleBar__button" title="Exportar a Excel">
                    <BsFileEarmarkExcel className="titleBar__icon not" />
                  </button>
                  <button className="titleBar__button" title="Exportar a PDF">
                    <BsFileEarmarkPdf className="titleBar__icon not" />
                  </button>
                </>
              }
            />

            <section className="formComponent__bigContainer">
              <div className="formComponent__container">
                <div className="formComponent__search">
                  <form action="" className="formComponent__searchForm">
                    <div className="formComponent__searchFormContainer">
                      <div className="formComponent__searchInputs">
                        <input
                          type="text"
                          className="formComponent__input formComponent__searchInput"
                          placeholder="Nombre"
                          title="Introduzca el nombre del grupo que desea buscar"
                        />
                      </div>
                      <button
                        className="formComponent__searchButton not"
                        title="Realizar búsqueda"
                      >
                        <BsSearch className="formComponent__searchIcon" />
                        <p className="formComponent__searchP">Buscar</p>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="formComponent__title">
                  <button
                    className="formComponent__button"
                    onClick={toggleOpen}
                    title="Click para mostrar u ocultar"
                  >
                    <BsChevronRight
                      className={`formComponent__icon ${
                        isOpen ? "rotated" : ""
                      }`}
                    />
                  </button>
                  <p>Opciones de busqueda</p>
                </div>
                <div
                  className={`formContainer__hrContainer ${
                    isOpen ? "visible" : "hidden"
                  }`}
                >
                  <hr className="formComponent__hr" />
                </div>
                <div
                  className={`formComponent__formContainer ${
                    isOpen ? "visible" : "hidden"
                  }`}
                >
                  <form action="" className="formComponent__form">
                    <div className="formComponent__LabelInputs">
                      <>
                        <label htmlFor="" className="formComponent__label">
                          Zona de guardia
                          <input
                            type="text"
                            className="formComponent__input"
                            placeholder="Introduzca la zona de guardia"
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
                      </>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <section className="tableComponenet__container">
              <div className="tableComponent__headerContainer">
                <p>{tableName}</p>
                <div className="tableComponent__tableControls">
                  <label htmlFor="" className="tableComponent__rowsControls">
                    Registros por páginas
                    <input
                      type="text"
                      placeholder={0}
                      value={rowsPerPage}
                      onChange={handleInputChange}
                      title="Introduzca el número de registros por página que desea visualizar"
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="tableComponent__paginationControls"
                  >
                    <button
                      className="tableComponent__paginationControls__button"
                      onClick={() => handleNavigation("first")}
                      title="Ir a la primera página"
                    >
                      <BsChevronBarLeft className="tableComponent__paginationControls__buttonIcon" />
                    </button>
                    <button
                      className="tableComponent__paginationControls__button"
                      onClick={() => handleNavigation("prev")}
                      title="Ir a la página anterior"
                    >
                      <BsChevronLeft className="tableComponent__paginationControls__buttonIcon" />
                    </button>{" "}
                    Página
                    <input
                      type="text"
                      placeholder={0}
                      value={actualPage}
                      onChange={(e) => handlePageChange(e.target.value)}
                      title="Introduzca la página que desea visualizar"
                    />
                    de {totalPages + " "}
                    <button
                      className="tableComponent__paginationControls__button"
                      onClick={() => handleNavigation("next")}
                      title="Ir a la página siguiente"
                    >
                      <BsChevronRight className="tableComponent__paginationControls__buttonIcon" />
                    </button>
                    <button
                      className="tableComponent__paginationControls__button"
                      onClick={() => handleNavigation("last")}
                      title="Ir a la última página"
                    >
                      <BsChevronBarRight className="tableComponent__paginationControls__buttonIcon" />
                    </button>
                  </label>
                </div>
              </div>

              <div className="tableComponent__table">
                {filteredData.length > 0 ? (
                  <>
                    <table className="tableComponent__tableContainer">
                      <thead className="tableComponent__tableContainer__thead">
                        <tr className="tableComponent__tableContainer__tr tableComponent__tableContainer__trHeader">
                          <th className="tableComponent__tableContainer__th tableComponent__tableContainer__thNumber">
                            No.
                          </th>
                          {columnNames.map((columnName, index) => (
                            <th
                              className="tableComponent__tableContainer__th"
                              key={index}
                            >
                              {columnName}
                            </th>
                          ))}
                          <th className="tableComponent__tableContainer__th tableComponent__tableContainer__thOptions">
                            Opciones
                          </th>
                        </tr>
                      </thead>
                      <tbody className="tableComponent__tableContainer__tbody">
                        {filteredData.map((row, rowIndex) => (
                          <tr
                            className="tableComponent__tableContainer__tr"
                            key={rowIndex}
                          >
                            <td className="tableComponent__tableContainer__td">
                              {count + rowIndex}
                            </td>
                            {columns.map((column, columnIndex) => (
                              <td
                                className="tableComponent__tableContainer__td"
                                key={columnIndex}
                              >
                                {row[column]}
                              </td>
                            ))}
                            <td className="tableComponent__tableContainer__td tableComponent__tableContainer__tdOptions">
                              <div className="tdOptions">
                                <button
                                  className="tdOptions__button"
                                  title="Ver detalles"
                                  onClick={() => goToDetailsGuardGroup(row.id)}
                                >
                                  <BsEye className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Editar"
                                >
                                  <BsPencil className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Asociar personas a grupos de guardia"
                                >
                                  <BsPersonPlus className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Exportar a Excel"
                                >
                                  <BsFileEarmarkExcel className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Asociar permisos"
                                >
                                  <BsPersonLock className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Borrar"
                                  onClick={() => deleteGuardGroup()}
                                >
                                  <BsTrash3 className="tdOptions__buttonIcon" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <div className="tableComponent__message">
                    <p className="tableComponent__messageP">
                      No existen registros en el sistema
                    </p>
                  </div>
                )}
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

// import React from "react";
// import MainStructure from "../../components/structure/MainStructure.jsx";
// import TitleBarButtons from "./TitleBarButtons.jsx";
// import SearchFields from "./SearchFields.jsx";
// import FormFields from "./FormFields.jsx";
// import TableButtons from "./TableButtons.jsx";
// import { guard_groups } from "../../components/tableComponent/tablaComponent.js";

// export function GuardGroups() {
//   return (
//     <MainStructure
//       namePage="Grupos de guardia"
//       user="user"
//       activeSection="planning"
//       activeOption="Grupos de guardia"
//       titleBarButtons={<TitleBarButtons />}
//       search={<SearchFields />}
//       labels={<FormFields />}
//       tableName="Grupos de guardia"
//       columnNames={[
//         "Grupo de Guardia",
//         "Zona de guardia",
//         "No. de personas asociadas",
//       ]}
//       columns={["grupo", "zona", "personasAsociadas"]}
//       data={guard_groups}
//       tableComponentButtons={<TableButtons />}
//     />
//   );
// }

// export default GuardGroups;
