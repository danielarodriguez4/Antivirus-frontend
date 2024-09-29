import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess, setErrorMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear any previous error messages
    setErrorMessage('');

    try {
      // Make the POST request to the backend
      const response = await axios.post('http://localhost:5000/login', {
        username: email,
        password,
      });

      // Check if the response contains a token
      if (response.data.token) {
        // Save the token to localStorage
        localStorage.setItem('token', response.data.token);

        // Call the success handler if login is successful
        onLoginSuccess();
      } else {
        // Set an error message if no token is returned (login failed)
        setErrorMessage('Login failed.');
      }
    } catch (error) {
      // Handle network errors or other exceptions
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
