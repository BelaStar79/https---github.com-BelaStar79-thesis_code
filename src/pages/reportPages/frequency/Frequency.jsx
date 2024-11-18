import React from "react";
import MainStructure from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { frequency } from "../../components/others/table.js";

export function Frequency() {
  return (
    <MainStructure
      namePage="Periodicidad"
      user="user"
      activeSection="report"
      activeOption="Periodicidad"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Periodicidad"
      columnNames={[
        "Zonas de guardia",
        "Cantidad de personas",
        "Número de horas",
        "Número de turnos",
        "Frecuencia",
        "Cantidad de personas-Hora guardia",
      ]}
      columns={[
        "zona",
        "cantidad",
        "horas",
        "turnos",
        "frecuencia",
        "personasHoras",
      ]}
      data={frequency}
    />
  );
}

export default Frequency;
