import React from "react";
import MainStructure from "../components/mainStructure/MainStructure.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";
import FormFields from "./FormFields.jsx";
import TableButtons from "./TableButtons.jsx";
import { posts } from "../components/tableComponent/tablaComponent.js";

export function Posts() {
  return (
    <MainStructure
      namePage="Postas"
      user="user"
      activeSection="planning"
      activeOption="Postas"
      titleBarButtons={<TitleBarButtons />}
      search={<SearchFields />}
      labels={<FormFields />}
      tableName="Postas"
      columnNames={[
        "Postas",
        "Zonas de guaria",
        "Cantidad de personas",
        "Activo",
      ]}
      columns={["posta", "zona", "cantidad", "activo"]}
      data={posts}
      tableComponentButtons={<TableButtons />}
    />
  );
}

export default Posts;
