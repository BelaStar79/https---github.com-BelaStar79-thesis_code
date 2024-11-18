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
  BsFileEarmarkExcel,
  BsFileEarmarkPdf,
  BsEye,
  BsPencil,
  BsCalendar3,
  BsTrash3,
  BsSearch,
  BsChevronRight,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronBarRight,
  BsInfoLg,
} from "react-icons/bs";
import {
  setIdRow,
  setIdRowTwo,
  guard_area,
} from "../../components/others/table.js";

export default function GuardArea() {
  // editable variables
  const namePage = "Registrar zonas de guardia";
  const activeSection = "planning";
  const activeOption = "Zonas de guardia";
  const tableName = "Responsable";
  const columnNames = ["Nombre", "CI", "Solapin", "Cargo", "Estructura"];
  const columns = ["nombre", "ci", "solapin", "cargo", "estructura"];

  // inputs variables
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [actualPage, setActualPage] = useState(1);

  // navigate metod
  const navigate = useNavigate();
  const goToAddGuardArea = () => {
    navigate("/planning/guard-area/add/");
  };
  const goToDetailsGuardArea = (id_zona, id) => {
    setIdRow(id_zona - 1);
    setIdRowTwo(id - 1);
    navigate(`/planning/guard-area/details/`);
  };
  const goToEditGuardArea = (id) => {
    setIdRow(id - 1);
    navigate("/planning/guard-area/edit/");
  };
  const goToShiftsAndSchedules = (id_zona, id) => {
    setIdRow(id_zona - 1);
    setIdRowTwo(id - 1);
    navigate(`/planning/guard-area/shifts-schedules/`);
  };

  const deleteGuardArea = () => {
    console.log("Eliminando datos...");
  };

  // title variable
  const [pageTitle, setPageTitle] = useState(false);

  // others variables for table
  const [totalPages, setTotalPages] = useState(
    Math.ceil(guard_area?.length / rowsPerPage)
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
    setTotalPages(Math.ceil(guard_area?.length / parseInt(value)));

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
  const filteredData = guard_area?.slice(startIndex, endIndex);
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
                    title="Añadir una nueva planificación"
                    onClick={goToAddGuardArea}
                  >
                    <BsPlusCircle className="titleBar__icon" />
                  </button>
                  <button
                    className="titleBar__button not"
                    title="Exportar a Excel"
                  >
                    <BsFileEarmarkExcel className="titleBar__icon" />
                  </button>
                  <button
                    className="titleBar__button not"
                    title="Exportar a PDF"
                  >
                    <BsFileEarmarkPdf className="titleBar__icon" />
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
                          title="Introduzca el nombre de la planificación que desea buscar"
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
                      <label htmlFor="" className="formComponent__label">
                        Fecha de inicio
                        <input type="date" className="formComponent__input" />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Fecha de fin
                        <input type="date" className="formComponent__input" />
                      </label>
                      <label htmlFor="" className="formComponent__label">
                        Zona de guardia
                        <input
                          type="text"
                          className="formComponent__input"
                          placeholder="Introduzca la zona"
                        />
                      </label>
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
                                  onClick={() =>
                                    goToDetailsGuardArea(row.id_zona, row.id)
                                  }
                                >
                                  <BsEye className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Editar"
                                  onClick={() => goToEditGuardArea(row.id)}
                                >
                                  <BsPencil className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Asociar horarios y turnos de guardia"
                                  onClick={() =>
                                    goToShiftsAndSchedules(row.id_zona, row.id)
                                  }
                                >
                                  <BsCalendar3 className="tdOptions__buttonIcon" />
                                </button>
                                <button
                                  className="tdOptions__button"
                                  title="Borrar"
                                  onClick={() => deleteGuardArea()}
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
                        </tr>
                      </thead>
                    </table>
                    <div className="tableComponent__message">
                      <BsInfoLg className="tableComponent__messageIcon" />
                      <p className="tableComponent__messageP">
                        No hay datos para mostrar
                      </p>
                    </div>
                  </>
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
