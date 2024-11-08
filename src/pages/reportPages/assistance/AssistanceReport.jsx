import React from "react";
import MainStructure from "../../components/structure/MainStructureTwo.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import { assistance_report } from "../../components/tableComponent/tablaComponent.js";

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
        "fecha",
        "nombre",
        "ci",
        "usuario",
        "solapin",
        "estructura",
        "presente",
      ]}
      data={assistance_report}
    />
  );
}

export default AssistanceReport;
