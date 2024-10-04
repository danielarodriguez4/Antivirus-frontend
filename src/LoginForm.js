import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess, setErrorMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleSubmit = async (event) => {
  event.preventDefault();
  setErrorMessage('');

  try {
    // Request POST to the backend
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    
    console.log('Respuesta del backend:', response.data); // Verifica qué se está recibiendo
    

    // Check if the response has a token
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      onLoginSuccess(response.data.nombre); 
    } else {
      setErrorMessage('Login failed.');
    }
    
  } catch (error) {
    // Handle network errors
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
