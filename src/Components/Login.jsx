import React, { useState } from 'react'
import { useAuth } from '../Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate('/profile')
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setUser(e.target.value)} />
      <div>
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login
