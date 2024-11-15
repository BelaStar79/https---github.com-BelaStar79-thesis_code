import React, { useState, useEffect } from "react";
import "./scanner.css";
import "../components/structure/mainStructure.css";
import CompanyBelt from "../components/companyBelt/CompanyBelt.jsx";
import SideMenu from "../components/sideMenu/SideMenu.jsx";
import TitleBar from "../components/titleBar/TitleBar.jsx";
import FooterComponent from "../components/footerComponent/FooterComponent.jsx";

export default function Scanner() {
  const [pageTitle, setPageTitle] = useState(false);
  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | Lectura de solapin";
  }, [pageTitle]);

  

  return (
    <div className="pageStructure">
      <div className="pageStructure__companyBelt">
        <CompanyBelt
          user="user"
          profilePhoto="../../../public/images/user.png"
        />
      </div>
      <div className="pageStructure__bigContainer">
        <div className="pageStructure__sideMenu">
          <SideMenu activeOption="Lectura de solapin" activeSection="scanner" />
        </div>
        <div className="pageStructure__container">
          <TitleBar title="Lectura de solapin" titleBarButtons="" />
          <div className="scannerContainerr">
            
          </div>
        </div>
      </div>
      <div className="pageStructure__footer">
        <FooterComponent />
      </div>
    </div>
  );
}
