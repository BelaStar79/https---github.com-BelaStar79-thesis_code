import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Provincia
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la provincia"
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Municipio
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el municipio"
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
        Cargo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el cargo"
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
      <label htmlFor="" className="formComponent__label">
        Categoría
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la categoría"
        />
      </label>
    </>
  );
}

export default FormFields;
