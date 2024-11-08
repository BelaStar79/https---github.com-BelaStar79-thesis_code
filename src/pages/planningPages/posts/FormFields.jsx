import React from "react";

export function FormFields() {
  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Activo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca si está activo o no"
        />
      </label>
    </>
  );
}

export default FormFields;
