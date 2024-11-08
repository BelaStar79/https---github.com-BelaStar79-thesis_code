import React from "react";
import MainStructure from "../../components/structure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { assistance } from "../../components/tableComponent/tablaComponent.js";

export function Assistance() {
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
        "Turno",
        "Posta",
        "Nombre",
        "Zonas de guaria",
        "Cantidad de personas",
      ]}
      columns={["turno", "posta", "nombre", "zona", "cantidad"]}
      data={assistance}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Assistance;
