import React, { useState } from 'react';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import './App.css';

function Login() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [nombre, setNombre] = useState('');  
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSuccessfulLogin = (nombreUsuario) => {
    console.log('Nombre recibido en el componente padre:', nombreUsuario);
    setNombre(nombreUsuario);
    setShowHomePage(true);
  };
  
  
  

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage nombre={nombre} /> 
      ) : (
        <div className="container">
          <div className="rectangulo"></div>
          <header className="App-header">
            <img src={"logo.png"} className="App-logo" alt="logo" />
            <h1>¡Bienvenido!</h1>
            <p>Ingresa tus datos para anotarte a una asesoría</p>
            <LoginForm onLoginSuccess={handleSuccessfulLogin} setErrorMessage={setErrorMessage} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </header>
        </div>
      )}
    </div>
  );
}

export default Login;
