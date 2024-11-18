import React from "react";
import MainStructureTwo from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { potencial } from "../../components/others/table.js";

export function PotentialReport() {
  return (
    <MainStructureTwo
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
      data={potencial}
    />
  );
}

export default PotentialReport;
