import React from "react";
import MainStructure from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { guard } from "../../components/others/table.js";

export function Guard() {
  return (
    <MainStructure
      namePage="Reporte de Guardia Obrera Estudiantil"
      user="user"
      activeSection="report"
      activeOption="Guardia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Reporte de guardia"
      columnNames={[
        "Zonas de guardia",
        "Nombre",
        "Área",
        "Turnos",
        "Hora inicio",
        "Hora fin",
      ]}
      columns={["zona", "nombre", "area", "turno", "horaInicio", "horaFin"]}
      data={guard}
    />
  );
}

export default Guard;
