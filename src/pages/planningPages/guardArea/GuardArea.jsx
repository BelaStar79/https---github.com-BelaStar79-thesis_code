import React from "react";
import MainStructure from "../../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { guard_area } from "../../components/tableComponent/tablaComponent.js";

export function GuardArea() {
  return (
    <MainStructure
      namePage="Zonas de guardia"
      user="user"
      activeSection="planning"
      activeOption="Zonas de guardia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Responsables por zona"
      columnNames={["Nombre", "CI", "Solapin", "Cargo", "Estructura"]}
      columns={["nombre", "ci", "solapin", "cargo", "estructura"]}
      data={guard_area}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default GuardArea;
