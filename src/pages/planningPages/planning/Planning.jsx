import React from "react";
import MainStructure from "../../components/mainStructure/MainStructure.jsx";
import TableButtons from "./TableButtons.jsx";
import FormFields from "./FormFields.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import { planificaciones } from "../../components/tableComponent/tablaComponent.js";

export function Planning() {
  return (
    <MainStructure
      namePage="Planificación"
      user="user"
      activeSection="planning"
      activeOption="Planificación"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Planificaciones"
      columnNames={["Nombre", "Zona de guardia", "Fecha inicio", "Fecha fin"]}
      columns={["nombre", "zona", "inicio", "fin"]}
      data={planificaciones}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Planning;
