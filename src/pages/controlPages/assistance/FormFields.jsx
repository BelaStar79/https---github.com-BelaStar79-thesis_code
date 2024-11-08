import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Fecha de inicio
        <input
          type="date"
          className="formComponent__input"
          placeholder="Introduzca la fecha de inicio"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Fecha de fin
        <input
          type="date"
          className="formComponent__input"
          placeholder="Introduzca la fecha de fin"
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
        Posta
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la posta"
        />
      </label>
    </>
  );
}

export default FormFields;
