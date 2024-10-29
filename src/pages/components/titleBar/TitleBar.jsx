import React from "react";
import "./titleBar.css";

export default function TitleBar({ title, buttons }) {
  return (
    <section className="titleBar">
      <div className="titleBar__container">
        <h2>{title}</h2>
        <div className="titleBar__buttonsContainer">{buttons}</div>
      </div>
    </section>
  );
}
