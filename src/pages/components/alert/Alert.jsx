import React from "react";
import './alert.css'
import { CiCircleRemove, CiCircleAlert, CiCircleInfo, CiCircleCheck } from "react-icons/ci";

export function Alert ({ type, message, className }) {

    const variants = {
        success: {
            icon: <CiCircleCheck className="alertContainer-iconSuccess" />,
            class_name: "alertContainer-success",
            title: "Éxito"
        },
        error: {
            icon: <CiCircleRemove className="alertContainer-iconError" />,
            class_name: "alertContainer-error",
            title: "Error"
        },
        warning: {
            icon: <CiCircleAlert className="alertContainer-iconWarning" />,
            class_name: "alertContainer-warning",
            title: "Advertencia"
        },
        info: {
            icon: <CiCircleInfo className="alertContainer-iconInfo" />,
            class_name: "alertContainer-info",
            title: "Información"
        },
    };

    const variant = variants[type];

    return (
        <div className={"alertContainer" + " " + variant.class_name + " " + className}>
            <div className="alertContainer_iconContainer">
                {variant.icon}
            </div>
            <div className="alertContainer_info">
                <strong>{variant.title}</strong>
                <span>{message}</span>
            </div>
            <div className="alertContainer_buttonContainer">
                <button>
                    <CiCircleRemove />
                </button>
            </div>
        </div>
    )
}

export default Alert;
