import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Zona de guardia
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la zona de guardia"
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
