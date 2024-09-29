import React, { useState } from 'react';
import HomePage from './HomePage';
import LoginForm from './LoginForm';

function Login() {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleButtonClick = () => {
    setShowHomePage(true);
  };

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage />
      ) : (
        <div className="container">
          <div className="rectangulo"></div>
          <header className="App-header">
            <img src={"logo.png"} className="App-logo" alt="logo" />
            <h1>¡Bienvenido!</h1>
            <p>Ingresa tus datos para anotarte a una asesoría</p>
            <LoginForm />
            <button type="submit" className="credentials-button" onClick={handleButtonClick}>
              Iniciar sesión
            </button>
          </header>
        </div>
      )}
    </div>
  );
}

export default Login;