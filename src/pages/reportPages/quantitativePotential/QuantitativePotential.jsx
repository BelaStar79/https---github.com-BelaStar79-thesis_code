import React from "react";
import MainStructure from "../../components/structure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { quantitative_potential } from "../../components/tableComponent/tablaComponent.js";

export function QuantitativePotential() {
  return (
    <MainStructure
      namePage="Potencial cuantitativo"
      user="user"
      activeSection="report"
      activeOption="Potencial cuantitativo"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Potencial"
      columnNames={[
        "Estructura",
        "Recursos humanos",
        "Potencial",
        "Pendientes",
      ]}
      columns={["estructura", "recursosHumanos", "potencial", "pendientes"]}
      data={quantitative_potential}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default QuantitativePotential;
