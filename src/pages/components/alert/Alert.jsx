import React, { useState } from "react";
import "./alert.css";
import {
  CiCircleRemove,
  CiCircleAlert,
  CiCircleInfo,
  CiCircleCheck,
} from "react-icons/ci";

export function Alert({ type, message, className }) {
  const variants = {
    success: {
      icon: <CiCircleCheck className="alertContainer-icon" />,
      class_name: "alertContainer-success",
      title: "Éxito",
    },
    error: {
      icon: <CiCircleRemove className="alertContainer-icon" />,
      icon_class: "alertContainer-iconError",
      class_name: "alertContainer-error",
      title: "Error",
    },
    warning: {
      icon: <CiCircleAlert className="alertContainer-icon" />,
      class_name: "alertContainer-warning",
      title: "Advertencia",
    },
    info: {
      icon: <CiCircleInfo className="alertContainer-icon" />,
      class_name: "alertContainer-info",
      title: "Información",
    },
  };

  const variant = variants[type];

  return (
    <div
      className={"alertContainer" + " " + variant.class_name + " " + className}
    >
      <div className="alertContainer_iconContainer">
        <div className="alertContainer_iconContent">{variant.icon}</div>
      </div>
      <div className="alertContainer_info">
        <strong>{variant.title}</strong>
        <span>{message}</span>
      </div>
      <div className="alertContainer_buttonContainer">
        <button className="alertContainer_button" title="Cerrar">
          X
        </button>
      </div>
    </div>
  );
}

export default Alert;
