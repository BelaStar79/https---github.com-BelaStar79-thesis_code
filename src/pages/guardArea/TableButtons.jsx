import React from "react";
import { BsEye, BsPencil, BsCalendar3, BsTrash3 } from "react-icons/bs";

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
        title="Asociar horarios y turnos de guardia"
      >
        <BsCalendar3 className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Borrar">
        <BsTrash3 className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default TableButtons;
