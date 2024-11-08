import React from "react";
import {
  BsPlusCircle,
  BsFileEarmarkExcel,
  BsFileEarmarkPdf,
} from "react-icons/bs";

export default function TitleBarButtons() {
  return (
    <>
      <button className="titleBar__button" title="Añadir una nueva incidencia">
        <BsPlusCircle className="titleBar__icon" />
      </button>
      {/* <button className="titleBar__button" title="Exportar a Excel">
        <BsFileEarmarkExcel className="titleBar__icon" />
      </button>
      <button className="titleBar__button" title="Exportar a PDF">
        <BsFileEarmarkPdf className="titleBar__icon" />
      </button> */}
    </>
  );
}
