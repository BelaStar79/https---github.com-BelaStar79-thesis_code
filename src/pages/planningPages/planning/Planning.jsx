import React from "react";
import MainStructure from "../../components/structure/MainStructure.jsx";
import TableButtons from "./TableButtons.jsx";
import FormFields from "./FormFields.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import { planificaciones } from "../../components/tableComponent/tablaComponent.js";

export function Planning() {
  // const fetchData = async () => {
  //   const response = fetch("http://localhost/api/planificaciones", {
  //     credentials: "include",
  //   });

  //   const data = await response.json();
  //   return data;
  // };

  return (
    <MainStructure
      namePage="Planificación"
      user="user"
      activeSection="planning"
      activeOption="Planificación"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Planificaciones"
      columnNames={["Nombre", "Zona de guardia", "Fecha inicio", "Fecha fin"]}
      columns={[
        "nombre_planificacion",
        "nombre_region_guardia",
        "fecha_inicio",
        "fecha_fin",
      ]}
      data={planificaciones}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Planning;
