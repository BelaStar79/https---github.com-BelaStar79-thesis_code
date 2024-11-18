import React from "react";
import MainStructureTwo from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { quantitative_potential } from "../../components/others/table.js";

export function QuantitativePotential() {
  return (
    <MainStructureTwo
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
    />
  );
}

export default QuantitativePotential;
