import React, { useEffect, useState } from "react";
import SideMenu from "../components/sideMenu/SideMenu.jsx";
import TableComponent from "../components/tableComponent/TableComponent.jsx";
import { planificaciones } from "../components/tableComponent/tablaComponent.js";
import "./planning.css";
import { ButtonCreate } from "./ButtonCreate.jsx";
import Alert from "../components/alert/Alert.jsx";

export function Planning() {
  const [pageTitle, setPageTitle] = useState(false);

  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | Planificación";
  }, [pageTitle]);

  return (
    <div>
      {/* <SideMenu /> */}
      <TableComponent
        rowsPerPage={15}
        columnNames={["Nombre", "Zona de guardia", "Fecha inicio", "Fecha fin"]}
        columns={["nombre", "zona", "inicio", "fin"]}
        data={planificaciones}
        buttons={<ButtonCreate />}
      />
    </div>
  );
}

export default Planning;
