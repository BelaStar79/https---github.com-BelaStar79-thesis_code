import React from "react";
import {
  BsEye,
  BsPencil,
  BsCalendar4,
  BsCalendar4Week,
  BsEnvelope,
  BsFileEarmarkPdf,
  BsTrash3,
} from "react-icons/bs";

export function ButtonCreate() {
  return (
    <div className="tableComponent_tdOptions">
      <button className="tableComponent_button" title="Ver detalles">
        <BsEye className="tableComponent_buttonIcon" />
      </button>
      <button className="tableComponent_button" title="Editar">
        <BsPencil className="tableComponent_buttonIcon" />
      </button>
      <button
        className="tableComponent_button"
        title="Planificación automática"
      >
        <BsCalendar4Week className="tableComponent_buttonIcon" />
      </button>
      <button className="tableComponent_button" title="Planificación manual">
        <BsCalendar4 className="tableComponent_buttonIcon" />
      </button>
      <button className="tableComponent_button" title="Publicar">
        <BsEnvelope className="tableComponent_buttonIcon" />
      </button>
      <button className="tableComponent_button" title="Exportar">
        <BsFileEarmarkPdf className="tableComponent_buttonIcon" />
      </button>
      <button className="tableComponent_button" title="Borrar">
        <BsTrash3 className="tableComponent_buttonIcon" />
      </button>
    </div>
  );
}

export default ButtonCreate;
