import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Fecha
        <input
          type="date"
          className="formComponent__input"
          placeholder="Introduzca la fecha"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Sexo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el sexo"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Estructura
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la estructura"
        />
      </label>
    </>
  );
}

export default FormFields;
