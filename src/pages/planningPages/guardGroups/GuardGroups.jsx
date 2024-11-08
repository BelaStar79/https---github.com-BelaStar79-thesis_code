import React from "react";
import MainStructure from "../../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { guard_groups } from "../../components/tableComponent/tablaComponent.js";

export function GuardGroups() {
  return (
    <MainStructure
      namePage="Grupos de guardia"
      user="user"
      activeSection="planning"
      activeOption="Grupos de guardia"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Grupos de guardia"
      columnNames={[
        "Grupo de Guardia",
        "Zona de guardia",
        "No. de personas asociadas",
      ]}
      columns={["grupo", "zona", "personasAsociadas"]}
      data={guard_groups}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default GuardGroups;
