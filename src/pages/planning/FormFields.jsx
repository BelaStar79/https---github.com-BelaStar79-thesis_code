import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Fecha de inicio
        <input type="date" className="formComponent__input" />
      </label>
      <label htmlFor="" className="formComponent__label">
        Fecha de fin
        <input type="date" className="formComponent__input" />
      </label>
      <label htmlFor="" className="formComponent__label">
        Zona de guardia
        <input type="text" className="formComponent__input" />
      </label>
      <label htmlFor="" className="formComponent__label">
        Estados de planificación
        <input type="text" className="formComponent__input" />
      </label>
    </>
  );
}

export default FormFields;
