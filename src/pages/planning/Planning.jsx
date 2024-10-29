import React, { useEffect, useState } from "react";
import SideMenu from "../components/sideMenu/SideMenu.jsx";
import TableComponent from "../components/tableComponent/TableComponent.jsx";
import { planificaciones } from "../components/tableComponent/tablaComponent.js";
import "./planning.css";
import ButtonCreate from "./TableButtons.jsx";
import FormComponent from "../components/formComponent/FormComponent.jsx";
import Alert from "../components/alert/Alert.jsx";
import FormFields from "./FormFields.jsx";
import CompanyBelt from "../components/companyBelt/CompanyBelt.jsx";

export function Planning() {
  const [pageTitle, setPageTitle] = useState(false);

  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | Planificación";
  }, [pageTitle]);

  return (
    <div>
      {/* <SideMenu /> */}
      {/* <TableComponent
        rowsPerPage={15}
        columnNames={["Nombre", "Zona de guardia", "Fecha inicio", "Fecha fin"]}
        columns={["nombre", "zona", "inicio", "fin"]}
        data={planificaciones}
        buttons={<TableButtons />}
      /> */}
      {/* <FormComponent labels={<FormFields />} /> */}
      {/* <CompanyBelt user="user" profilePhoto="../../../public/images/user.png" /> */}
    </div>
  );
}

export default Planning;
