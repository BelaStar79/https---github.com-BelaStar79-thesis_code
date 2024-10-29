import React, { useState } from "react";
import "./formComponent.css";
import { BsChevronRight, BsSearch } from "react-icons/bs";

export default function FormComponent({ search, labels }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="formComponent__bigContainer">
      <div className="formComponent__container">
        <div className="formComponent__search">
          <form action="" className="formComponent__searchForm">
            <div className="formComponent__searchFormContainer">
              <div className="formComponent__searchInputs">{search}</div>
              <button
                className="formComponent__searchButton"
                title="Realizar búsqueda"
              >
                <BsSearch className="formComponent__searchIcon" />
                <p className="formComponent__searchP">Buscar</p>
              </button>
            </div>
          </form>
        </div>
        <div className="formComponent__title">
          <button
            className="formComponent__button"
            onClick={toggleOpen}
            title="Click para mostrar u ocultar"
          >
            <BsChevronRight
              className={`formComponent__icon ${isOpen ? "rotated" : ""}`}
            />
          </button>
          <p>Opciones de busqueda</p>
        </div>
        <div
          className={`formContainer__hrContainer ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <hr className="formComponent__hr" />
        </div>
        <div
          className={`formComponent__formContainer ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <form action="" className="formComponent__form">
            <div className="formComponent__LabelInputs">{labels}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
