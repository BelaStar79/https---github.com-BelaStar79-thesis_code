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
        "Cant. personas",
        "No. horas",
        "No. turnos",
        "Frecuencia",
        "Cant. personas-Hora guardia",
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
