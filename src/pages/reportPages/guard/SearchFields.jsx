import React from "react";

export default function SearchFields() {
  return (
    <>
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Nombre"
        title="Introduzca el nombre"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Carnet de identidad"
        title="Introduzca el ci"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Solapin"
        title="Introduzca el solapin"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Usuario"
        title="Introduzca el usuario"
      />
    </>
  );
}
