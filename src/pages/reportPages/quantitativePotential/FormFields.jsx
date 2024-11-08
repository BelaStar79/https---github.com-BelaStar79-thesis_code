import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Tipo de estructura
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el tipo de estructura"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Estructura consejo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la estructura consejo"
        />
      </label>
    </>
  );
}

export default FormFields;
