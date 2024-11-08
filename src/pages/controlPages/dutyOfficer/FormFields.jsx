import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Fecha de inicio desde
        <input
          type="date"
          className="formComponent__input"
          placeholder="Introduzca la fecha de inicio"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Fecha de inicio hasta
        <input
          type="data"
          className="formComponent__input"
          placeholder="Introduzca sla fecha de fin"
        />
      </label>
    </>
  );
}

export default FormFields;
