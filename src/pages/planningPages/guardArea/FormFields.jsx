import React, { useState } from "react";

export function FormFields() {
  const [provincia, setProvincia] = useState();
  const [municipio, setMunicipio] = useState();
  const [sexo, setSexo] = useState();
  const [cargo, setCargo] = useState();
  const [estructura, setEstructura] = useState();
  const [categoria, setCategoria] = useState();

  return (
    <>
      <label htmlFor="" className="formComponent__label">
        Provincia
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la provincia"
          value={provincia}
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Municipio
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el municipio"
          value={municipio}
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Sexo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el sexo"
          value={sexo}
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Cargo
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca el cargo"
          value={cargo}
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Estructura
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la estructura"
          value={estructura}
        />
      </label>
      <label htmlFor="" className="formComponent__label">
        Categoría
        <input
          type="text"
          className="formComponent__input"
          placeholder="Introduzca la categoría"
          value={categoria}
        />
      </label>
    </>
  );
}

export default FormFields;
