import React from "react";
import { BsEye } from "react-icons/bs";

export function TableButtons() {
  return (
    <div className="tdOptions">
      <button className="tdOptions__button" title="Ver detalles">
        <BsEye className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default TableButtons;
