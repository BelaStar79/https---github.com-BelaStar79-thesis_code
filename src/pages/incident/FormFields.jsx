import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Tipos de incidencia
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el tipo de incidencia"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Posta
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la posta"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Turno
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el turno"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Activo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca si esta activo o no"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Fecha de registro desde
        <input
          type="date"
          className="formComponent__input"
          placeholder="Introduzca la fecha de inicio"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Fecha de registro hasta
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
