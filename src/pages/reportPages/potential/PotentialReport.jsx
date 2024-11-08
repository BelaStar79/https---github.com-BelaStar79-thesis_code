import React from "react";
import MainStructure from "../../components/structure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { potential } from "../../components/tableComponent/tablaComponent.js";

export function PotentialReport() {
  return (
    <MainStructure
      namePage="Potencial"
      user="user"
      activeSection="planning"
      activeOption="Potencial"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Potencial"
      columnNames={["Nombre", "CI", "Solapin", "Cargo", "Estructura"]}
      columns={["nombre", "ci", "solapin", "cargo", "estructura"]}
      data={potential}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default PotentialReport;
