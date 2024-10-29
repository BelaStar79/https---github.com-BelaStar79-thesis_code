import React from "react";
import { BsChevronDown } from "react-icons/bs";
import "./companyBelt.css";

export default function CompanyBelt({ user, profilePhoto }) {
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
            <img src={profilePhoto} alt={`Foto de prefil de ` + user} />
          </div>
          <div className="companyBelt__account">
            <button className="companyBelt__accountButton">
              <span>{user}</span>
              <BsChevronDown className="companyBelt__acountIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
