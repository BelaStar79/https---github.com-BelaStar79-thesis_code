import React from "react";
import {
  BsEye,
  BsPencil,
  BsTrash3,
  BsPersonPlus,
  BsPersonLock,
  BsFileEarmarkExcel,
} from "react-icons/bs";

export function TableButtons() {
  return (
    <div className="tdOptions">
      <button className="tdOptions__button" title="Ver detalles">
        <BsEye className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Editar">
        <BsPencil className="tdOptions__buttonIcon" />
      </button>
      <button
        className="tdOptions__button"
        title="Asociar personas a grupos de guardia"
      >
        <BsPersonPlus className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Exportar a Excel">
        <BsFileEarmarkExcel className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Asociar permisos">
        <BsPersonLock className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Borrar">
        <BsTrash3 className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default TableButtons;
