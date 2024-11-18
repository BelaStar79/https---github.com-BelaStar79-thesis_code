import React from "react";
import { BsEye, BsPencil, BsCalendar3, BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function TableButtons() {
  const navigate = useNavigate();
  const goToDetailsGuardArea = () => {
    navigate("/planning/guard-area/details/");
  };
  const goToEditGuardArea = () => {
    navigate("/planning/guard-area/edit/");
  };
  return (
    <div className="tdOptions">
      <button
        className="tdOptions__button"
        title="Ver detalles"
        onClick={goToDetailsGuardArea}
      >
        <BsEye className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Editar">
        <BsPencil className="tdOptions__buttonIcon not" />
      </button>
      <button
        className="tdOptions__button"
        title="Asociar horarios y turnos de guardia"
      >
        <BsCalendar3 className="tdOptions__buttonIcon not" />
      </button>
      <button className="tdOptions__button" title="Borrar">
        <BsTrash3 className="tdOptions__buttonIcon not" />
      </button>
    </div>
  );
}

export default TableButtons;
