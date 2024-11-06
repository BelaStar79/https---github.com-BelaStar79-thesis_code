import React from "react";
import MainStructure from "../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { duty_officer } from "../components/tableComponent/tablaComponent.js";

export function Incident() {
  return (
    <MainStructure
      namePage="Oficial de guardia superior"
      user="user"
      activeSection="control"
      activeOption="Oficial de guardia superior"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Incidencias"
      columnNames={[
        "Fecha",
        "Oficial de guardia",
        "Cantidad de personas",
        "Cantidad real de personas",
      ]}
      columns={["fecha", "oficialGuardia", "cantidad", "cantidadReal"]}
      data={duty_officer}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Incident;
