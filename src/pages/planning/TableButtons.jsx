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
    <div className="tdOptions">
      <button className="tdOptions__button" title="Ver detalles">
        <BsEye className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Editar">
        <BsPencil className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Planificación automática">
        <BsCalendar4Week className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Planificación manual">
        <BsCalendar4 className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Publicar">
        <BsEnvelope className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Exportar">
        <BsFileEarmarkPdf className="tdOptions__buttonIcon" />
      </button>
      <button className="tdOptions__button" title="Borrar">
        <BsTrash3 className="tdOptions__buttonIcon" />
      </button>
    </div>
  );
}

export default ButtonCreate;
