
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Welcome to Nexora ERP</h1>
      <p>Select how you want to continue</p>

      <div className="login-options">

        <button onClick={() => navigate('/customer-login')}>
          Login as Customer
        </button>

        <button onClick={() => navigate('/admin-login')}>
          Login as Admin
        </button>

      </div>
    </div>
  );
}

export default Login;
