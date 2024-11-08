import React from "react";
import { BsEye, BsPencil } from "react-icons/bs";

export function TableButtons() {
  return (
    <div className="tdOptions">
      <button className="tdOptions__button" title="Editar">
        <BsPencil className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default TableButtons;
