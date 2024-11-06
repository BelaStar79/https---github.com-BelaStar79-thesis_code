import React from "react";
import { BsEye, BsPersonGear, BsPersonExclamation } from "react-icons/bs";

export function TableButtons() {
  return (
    <div className="tdOptions">
      <button className="tdOptions__button" title="Ver detalles">
        <BsEye className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Asociar variables">
        <BsPersonGear className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Asociar patrones">
        <BsPersonExclamation className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default TableButtons;
