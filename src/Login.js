// followed tutorial here 
// https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
       // Call login function from const AuthProvider
       login();
       // Navigate to the demo page after login
       navigate('/demo');
      }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
