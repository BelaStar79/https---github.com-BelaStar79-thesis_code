import React from "react";
import MainStructure from "../../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { assistance } from "../../components/tableComponent/tablaComponent.js";

export function Guard() {
  return (
    <MainStructure
      namePage="Guardia"
      user="user"
      activeSection="report"
      activeOption="Guardia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Asistencia"
      columnNames={[
        "Turno",
        "Posta",
        "Nombre",
        "Zonas de guaria",
        "Cantidad de personas",
      ]}
      columns={["turno", "posta", "nombre", "zona", "cantidad"]}
      data={assistance}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Guard;
