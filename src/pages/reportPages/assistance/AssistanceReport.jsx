import React from "react";
import MainStructure from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { asistencia } from "../../components/others/table.js";

export function AssistanceReport() {
  return (
    <MainStructure
      namePage="Asistencia"
      user="user"
      activeSection="control"
      activeOption="Asistencia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Asistencia"
      columnNames={[
        "Fecha",
        "Nombre",
        "CI",
        "Usuario",
        "Solapin",
        "Estructura",
        "Presente",
      ]}
      columns={[
        "turno",
        "name",
        "ci",
        "usuario",
        "solapin",
        "estructura",
        "presente",
      ]}
      data={asistencia}
    />
  );
}

export default AssistanceReport;
