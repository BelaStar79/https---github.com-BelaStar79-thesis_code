import React from "react";
import '../styles/alert.css'
import { CiCircleAlert, CiCircleCheck, CiCircleInfo, CiCircleRemove } from "react-icons/ci";


function GeneralAlert({type, title, message, onClose}) {
    return (
        <div className="alert_container">
            <div className="alert_img">{type}</div>
            <div className="alert_info">
                <strong>{title}</strong>
                <span>{message}</span>
            </div>
            <div className="alert_close">
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}
function DoneAlert({message}) {
    return (
        <div className="alert doneAlert">
            <GeneralAlert type={
                <CiCircleCheck 
                    size={50} 
                    fill="var(--pastelGreen)" 
                />} 
                title="Éxito" 
                message={message}
                onClose={() => console.log("Alerta cerrada")}
            />
        </div>
    )
}
function ErrorAlert({message}) {
    return (
        <div className="alert errorAlert">
            <GeneralAlert type={
                <CiCircleAlert 
                    size={50} 
                    fill="var(--pastelRed)" 
                />} 
                title="Error" 
                message={message}
                onClose={() => console.log("Alerta cerrada")}
            />
        </div>
    )
}
function InfoAlert({message}) {
    return (
        <div className="alert infoAlert">
            <GeneralAlert type={
                <CiCircleInfo 
                    size={50} 
                    fill="var(--pastelBlue)" 
                />} 
                title="Información" 
                message={message}
                onClose={() => console.log("Alerta cerrada")}
            />
        </div>
    )
}
function WarningAlert({message}) {
    return (
        <div className="alert warningAlert">
            <GeneralAlert type={
                <CiCircleRemove 
                    size={50} 
                    fill="var(--pastelOrange)" 
                />} 
                title="Alerta" 
                message={message}
                onClose={() => console.log("Alerta cerrada")}
            />
        </div>
    )
}

export function Alert({alert, message}) {
    
    switch (alert) {
        case 'done':
            <DoneAlert message={message}/>
            break;
        case 'error':
            <ErrorAlert message={message}/>
            break;
        case 'info':
            <InfoAlert message={message}/>
            break;
        case 'warning':
            <WarningAlert message={message}/>
            break;
        default:
            console.log("Alerta no reconocida. (" + {alert} + ")");
            return null;
    }

}

export default Alert