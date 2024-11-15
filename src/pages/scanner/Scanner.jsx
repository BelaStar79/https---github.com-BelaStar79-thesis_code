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

  const handleScan = (resultado) => {
    console.log("Código de barras escaneado:", resultado);
    // Puedes agregar lógica aquí para procesar el código de barras escaneado
  };

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
          <div className="scannerContainer">
            <input
              type="text"
              id="barcodeInput"
              placeholder="Escanea un código de barras..."
            />
            <button
              className="scannerButton"
              onClick={() =>
                handleScan(document.getElementById("barcodeInput").value)
              }
            >
              Escanear
            </button>
          </div>
        </div>
      </div>
      <div className="pageStructure__footer">
        <FooterComponent />
      </div>
    </div>
  );
}
