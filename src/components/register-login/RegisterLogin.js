import React from 'react';
import './RegisterLogin.css';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
// <RegisterContainer />

const RegisterLogin = () => (
  <div id="register-login">
    <div id="register-login-content">
      <div id="register" className="center-text">
        <p>Sign Up</p>
        <RegisterContainer />
      </div>
      <div id="login" className="center-text">
        <p>Log In</p>
        <LoginContainer />
      </div>
    </div>
  </div>
);

export default RegisterLogin;
