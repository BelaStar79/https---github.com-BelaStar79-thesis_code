import { LoginForm } from "./components/LoginForm";
import { LoginFooter } from "./components/LoginFooter";
import "./login.css";
import React, { useEffect, useState } from "react";

function Login() {
  const [pageTitle, setPageTitle] = useState(false);

  useEffect(() => {
    document.title = pageTitle ? "GOE" : "GOE | Iniciar Sesión";
  }, [pageTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/planning/planning");
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginBigContainer">
          <div className="elementsLogin">
            <div className="logoContainer">
              <img
                src="../../public/images/logo_GSG.png"
                alt="GOE"
                title="Logo de GOE"
              />
            </div>
            <div className="loginText">
              <h2>
                Bienvenido al Módulo de Gestión de la Guardia Obrera Estudiantil
              </h2>
              <p>Inicie sesión para acceder</p>
            </div>
            <LoginForm />
          </div>
        </div>
        <LoginFooter />
      </div>
    </>
  );
}

export default Login;
