import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BsPlusCircle,
  BsFileEarmarkExcel,
  BsFileEarmarkPdf,
} from "react-icons/bs";

export default function TitleBarButtons() {
  const navigate = useNavigate();
  const goToAddIncident = () => {
    navigate("/control/incident/add/");
  };
  return (
    <>
      <button
        className="titleBar__button"
        title="Añadir una nueva incidencia"
        onClick={goToAddIncident}
      >
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
