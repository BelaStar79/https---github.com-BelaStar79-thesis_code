import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";
import { BsPerson, BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import Alert from "../../pages/components/alert/Alert.jsx";

export function LoginForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [showCloseEye, setShowCloseEye] = useState(false);
  const [error, setError] = useState();

  const toggleEye = () => {
    setShowCloseEye(!showCloseEye);
  };

  // data validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user && !password) {
      setError("Por favor, complete los campos de usuario y contraseña.");
    } else if (!user) {
      setError("Por favor, complete el campo de usuario.");
    } else if (!password) {
      setError("Por favor, complete el campo de contraseña.");
    } else if (user === "admin" && password === "admin") {
      navigate("/planning/planning");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <article className="loginForm">
      <form action="" onSubmit={handleSubmit}>
        <div className="userContainer" title="Escriba su usuario">
          <BsPerson size={20} color="var(--pastelRed)" />
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuario"
          />
        </div>
        <div className="passworContainer" title="Escriba su contraseña">
          <BsLock size={20} color="var(--pastelRed)" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showCloseEye ? "text" : "password"}
            placeholder="Contraseña"
          />
          {/* open eye */}
          <div className={`eye-toggle ${!showCloseEye ? "visible" : ""}`}>
            <BsEye size={20} color="var(--pastelRed)" onClick={toggleEye} />
          </div>
          {/* close eye */}
          <div className={`eye-toggle ${showCloseEye ? "visible" : ""}`}>
            <BsEyeSlash
              size={20}
              color="var(--pastelRed)"
              onClick={toggleEye}
            />
          </div>
        </div>
        <button
          type="submit"
          className="loginButton"
          title="Asegurese se haber llenado cerrectamente todos los campos"
        >
          Iniciar sesión
        </button>
      </form>
      {error && <Alert type={"error"} message={error} className="" />}
    </article>
  );
}

export default LoginForm;
