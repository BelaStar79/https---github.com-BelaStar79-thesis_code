import React, { useEffect, useState } from "react";
import "./mainStructure.css";
import SideMenu from "../sideMenu/SideMenu.jsx";
import TableComponent from "../tableComponent/TableComponent.jsx";
import FormComponent from "../formComponent/FormComponent.jsx";
import CompanyBelt from "../companyBelt/CompanyBelt.jsx";
import TitleBar from "../titleBar/TitleBar.jsx";
import FooterComponent from "../footerComponent/FooterComponent.jsx";
import { loggedUser } from "../others/login.js";

export function MainStructure({
  namePage,
  user,
  activeSection,
  activeOption,
  titleBarButtons,
  search,
  labels,
  tableName,
  columnNames,
  columns,
  data,
  tableComponentButtons,
}) {
  const [pageTitle, setPageTitle] = useState(false);

  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | " + namePage;
  }, [pageTitle]);

  return (
    <div className="pageStructure">
      <div className="pageStructure__companyBelt">
        <CompanyBelt
          user={loggedUser}
          profilePhoto="../../../public/images/admin.png"
        />
      </div>
      <div className="pageStructure__bigContainer">
        <div className="pageStructure__sideMenu">
          <SideMenu activeSection={activeSection} activeOption={activeOption} />
        </div>
        <div className="pageStructure__container">
          <TitleBar title={namePage} titleBarButtons={titleBarButtons} />
          <FormComponent search={search} labels={labels} />
          <TableComponent
            tableName={tableName}
            columnNames={columnNames}
            columns={columns}
            data={data}
            tableComponentButtons={tableComponentButtons}
          />
        </div>
      </div>
      <div className="pageStructure__footer">
        <FooterComponent />
      </div>
    </div>
  );
}

export default MainStructure;
