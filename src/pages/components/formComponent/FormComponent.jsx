import React, { useState } from "react";
import "./formComponent.css";
import { BsChevronRight } from "react-icons/bs";

export default function FormComponent({ labels }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="formComponent__bigContainer">
      <div className="formComponent__container">
        <div className="formComponent__title">
          <button className="formComponent__button" onClick={toggleOpen}>
            <BsChevronRight
              className={`formComponent__icon ${isOpen ? "rotated" : ""}`}
            />
          </button>
          <p>
            Opciones de busqueda
            <i> &#40;click para mostrar u ocultar&#41;</i>
          </p>
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
