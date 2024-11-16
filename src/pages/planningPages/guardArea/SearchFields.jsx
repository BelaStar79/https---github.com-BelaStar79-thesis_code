import React, { useState } from "react";

export default function SearchFields() {
  const [nombre, setNombre] = useState();
  const [ci, setCi] = useState();
  const [solapin, setSolapin] = useState();
  const [usuario, setUsuario] = useState();
  return (
    <>
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Nombre"
        value={nombre}
        title="Introduzca el nombre de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="CI"
        value={ci}
        title="Introduzca el CI de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Solapin"
        value={solapin}
        title="Introduzca el solapin de la persona que desea buscar"
      />
      <input
        type="text"
        className="formComponent__input formComponent__searchInput"
        placeholder="Usuario"
        value={usuario}
        title="Introduzca el usuario de la persona que desea buscar"
      />
    </>
  );
}
