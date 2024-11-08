import React from "react";
import MainStructure from "../../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { incident } from "../../components/tableComponent/tablaComponent.js";

export function Incident() {
  return (
    <MainStructure
      namePage="Incidencias"
      user="user"
      activeSection="control"
      activeOption="Incidencia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Incidencias"
      columnNames={[
        "Nombre",
        "Fecha de registro",
        "Tipo de incidencia",
        "Posta",
        "Turno",
        "Activo",
      ]}
      columns={["nombre", "fecha", "tipo", "posta", "turno", "activo"]}
      data={incident}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Incident;
