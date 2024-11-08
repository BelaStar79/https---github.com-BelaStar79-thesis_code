import React from "react";

export default function SearchFields() {
  return (
    <>
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Nombre"
        title="Introduzca el nombre de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="CI"
        title="Introduzca el CI de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Solapin"
        title="Introduzca el solapin de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Usuario"
        title="Introduzca el usuario de la persona que desea buscar"
      />
    </>
  );
}
