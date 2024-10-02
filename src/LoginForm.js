import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess, setErrorMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    console.log('Email:', email); // Log email and password for debugging
    console.log('Password:', password);

    try {
      // Request POST to the backend
      const response = await axios.post('http://localhost:5000/login', {
        email:email,
        password,
      });

      // Check if the response has a token
      if (response.data.token) {
        // Store the token locally
        localStorage.setItem('token', response.data.token);
        onLoginSuccess();
      } else {
        // If login fails
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