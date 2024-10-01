import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess, setErrorMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      // Solicitud POST con el backend
      const response = await axios.post('http://localhost:5000/login', {
        username: email,
        password,
      });

      // Verifica si la respuesta tiene un token
      if (response.data.token) {
        // Guarda el token de forma local
        localStorage.setItem('token', response.data.token);

        onLoginSuccess();
      } else {
        // Si el login falla
        setErrorMessage('Login failed.');
      }
    } catch (error) {
      // Mensajes de error de internet
      setErrorMessage('Network error occurred.');
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder='Ingresa tu correo electrónico'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder='Ingresa tu contraseña'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="credentials-button" type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
