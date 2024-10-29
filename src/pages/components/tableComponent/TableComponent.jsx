import React from "react";
import { useState, useEffect } from "react";
import "./tableComponent.css";
import {
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from "react-icons/bs";

export default function TableComponent({
  tableName,
  columnNames,
  data,
  columns,
  buttons,
}) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data?.length / rowsPerPage)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, [rowsPerPage]);

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

  // cambio en el input de registros por página
  const handleInputChange = (event) => {
    const value = event.target.value;
    setRowsPerPage(value);
    setTotalPages(Math.ceil(data?.length / parseInt(value)));

    setCurrentPage(1);
  };

  // cambio en el inpur de pagina actual
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

  // Cambio de pagina
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

  // Calcula el índice inicial y final de la página actual
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;

  // Filtra los datos para mostrar solo las filas de la página actual
  const filteredData = data?.slice(startIndex, endIndex);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!hasData) {
    return <div>No hay datos disponibles</div>;
  }

  return (
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
          <label htmlFor="" className="tableComponent__paginationControls">
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
                      {buttons}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="tableComponent__message">
            <p className="tableComponent__messageP">No hay datos disponibles</p>
          </div>
        )}
      </div>
    </section>
  );
}
