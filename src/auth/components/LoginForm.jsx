import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css'
import { CiUser, CiLock, CiRead, CiUnread } from 'react-icons/ci';
import Alert from '../../core/components/Alert';

export function LoginForm() {

    const navigate = useNavigate();
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showCloseEye, setShowCloseEye] = useState(false);
    
    const toggleEye = () => {
        setShowCloseEye(!showCloseEye);
    };

    // validacion de datos
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user === '' || password === ''){
            alert('Por favor, complete su formulario');
            // Alert ({alert:'warning', message:'Por favor, complete su formulario.'});
            return;
        }
        if(user === 'admin' && password === 'admin'){
            navigate('/planification');
            // Alert ({alert:'done', message:'Bienvenido a GOE.'});
        }else{
            alert('Usuario o contraseña incorrectos');
            // Alert ({alert:'error', message:'Usuario o contraseña incorrectos.'});
        }
    };

    return (
        <article className="loginForm">
            <form action="" onSubmit={handleSubmit}>
                <div className="userContainer" title='Escriba su usuario'>
                    <CiUser size={24} color="var(--pastelRed)" />
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Usuario"/>
                </div>
                <div className="passworContainer" title='Escriba su contraseña'>
                    <CiLock size={24} color="var(--pastelRed)" /> 
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        type={showCloseEye ? "text" : "password"}
                        placeholder="Contraseña"
                    />
                    {/* open eye */}
                    <div className={`eye-toggle ${!showCloseEye ? 'visible' : ''}`}>
                        <CiRead size={24} color="var(--pastelRed)" onClick={toggleEye} />
                    </div>
                    {/* close eye */}
                    <div className={`eye-toggle ${showCloseEye ? 'visible' : ''}`}>
                        <CiUnread size={24} color="var(--pastelRed)"  onClick={toggleEye}/>
            
                    </div>
                </div>
                <button  type="submit" className='loginButton' title='Asegurese se haber llenado cerrectamente todos los campos'>
                        Iniciar sesión
                </button>
            </form>
        </article>
    )
}

export default LoginForm;
