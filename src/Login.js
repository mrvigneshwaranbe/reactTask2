import React, { useState } from 'react';
import './Login.css'; 

const authenticateUser = async (username, password) => {
  if (username === 'user' && password === 'password') {
    return { success: true, user: { username } };
  } else {
    return { success: false, error: 'Invalid credentials' };
  }
};

const registerUser = async (username, password) => {

  return { success: true, user: { username } };
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authResponse = await authenticateUser(username, password);

    if (authResponse.success) {
      console.log('User authenticated:', authResponse.user);
    } else {
      console.error('Authentication failed:', authResponse.error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerResponse = await registerUser(username, password);

    if (registerResponse.success) {
      console.log('User registered:', registerResponse.user);
      
    } else {
      console.error('Registration failed:', registerResponse.error);
      
    }
  };

  return (
    <div className="login-form">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={isLogin ? handleSubmit : handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;