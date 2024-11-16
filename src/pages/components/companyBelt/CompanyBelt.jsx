import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import "./companyBelt.css";
import { loggedUser, clearLoggedUser } from "../others/login.js";

export default function CompanyBelt() {
  const closeLogout = () => {
    clearLoggedUser();
    window.location.href = "/";
  };

  return (
    <section className="companyBelt">
      <div className="companyBelt__container">
        <div
          className="companyBelt__leftContainer"
          title="Cintillo de la empresa"
        >
          <div className="companyBelt__logo">
            <img
              src="../../../../public/images/logo_GSG.png"
              alt="Logo"
              title="Logo"
              className="companyBelt__logoImage"
            />
          </div>
          <div className="companyBelt__info">
            <div className="companyBelt__companyName">
              <span>XABAL</span>
              <strong>campus</strong>
            </div>
            <div className="companyBelt__systemName">
              <p>Sistema de Gestión</p>
              <p>Ciudadana</p>
            </div>
          </div>
        </div>
        <div className="companyBelt__rightContainer">
          <div className="companyBelt__profilePhoto">
            <img
              src={`../../../../public/images/` + loggedUser + `.png`}
              alt={`Foto de prefil de ` + loggedUser}
            />
          </div>
          <div className="companyBelt__account">
            <span>{loggedUser}</span>
            <button
              className="companyBelt__accountButton"
              title="Cerrar sesión"
              onClick={closeLogout}
            >
              <BsBoxArrowRight className="companyBelt__acountIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
