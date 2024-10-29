import React, { useEffect, useState } from "react";
import SideMenu from "../components/sideMenu/SideMenu.jsx";
import TableComponent from "../components/tableComponent/TableComponent.jsx";
import { planificaciones } from "../components/tableComponent/tablaComponent.js";
import "./planning.css";
import TableButtons from "./TableButtons.jsx";
import FormComponent from "../components/formComponent/FormComponent.jsx";
import FormFields from "./FormFields.jsx";
import CompanyBelt from "../components/companyBelt/CompanyBelt.jsx";
import TitleBar from "../components/titleBar/TitleBar.jsx";
import TitleBarButtons from "./TitleBarButtons.jsx";
import SearchFields from "./SearchFields.jsx";

export function Planning() {
  const [pageTitle, setPageTitle] = useState(false);

  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | Planificación";
  }, [pageTitle]);

  return (
    <div className="planning">
      <div className="planning__companyBelt">
        <CompanyBelt
          user="user"
          profilePhoto="../../../public/images/user.png"
        />
      </div>
      <div className="planning__bigContainer">
        <div className="planning__sideMenu">
          <SideMenu />
        </div>
        <div className="planning__container">
          <TitleBar title="Planificación" buttons={<TitleBarButtons />} />
          <FormComponent search={<SearchFields />} labels={<FormFields />} />
          <TableComponent
            rowsPerPage={5}
            columnNames={[
              "Nombre",
              "Zona de guardia",
              "Fecha inicio",
              "Fecha fin",
            ]}
            columns={["nombre", "zona", "inicio", "fin"]}
            data={planificaciones}
            buttons={<TableButtons />}
          />
        </div>
      </div>
    </div>
  );
}

export default Planning;
