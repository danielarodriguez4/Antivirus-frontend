import React, { useState } from 'react'; 
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import './App.css';

function Login() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSuccessfulLogin = () => {
    setShowHomePage(true); // Muestra la página de Home Page si el login es exitoso
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
            <LoginForm onLoginSuccess={handleSuccessfulLogin} setErrorMessage={setErrorMessage} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </header>
          </div>
      )}
    </div>
  );
}

export default Login;
