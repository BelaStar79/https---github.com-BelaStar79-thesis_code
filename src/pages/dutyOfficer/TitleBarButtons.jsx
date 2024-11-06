import React from "react";
import { BsPlusCircle } from "react-icons/bs";

export default function TitleBarButtons() {
  return (
    <>
      <button className="titleBar__button" title="Añadir una nuevo oficial">
        <BsPlusCircle className="titleBar__icon" />
      </button>
    </>
  );
}
