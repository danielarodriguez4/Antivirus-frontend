import React, { useState } from 'react'; 
import HomePage from './HomePage';
import LoginForm from './LoginForm';

function Login() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSuccessfulLogin = () => {
    setShowHomePage(true); // Show HomePage on successful login
  };

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage /> // Render HomePage on successful login
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
