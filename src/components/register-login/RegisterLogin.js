import React from 'react';
import './RegisterLogin.css';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
// <RegisterContainer />

const RegisterLogin = () => (
  <div id="register-login">
    <div id="register-login-content">
      <div id="register" className="center-text">
        <p className="register-login-title">Sign Up</p>
        <small className="required-note">(All fields required)</small>
        <RegisterContainer />
      </div>
      <div id="login" className="center-text">
        <p className="register-login-title">Log In</p>
        <small className="required-note">(All fields required)</small>
        <LoginContainer />
      </div>
    </div>
  </div>
);

export default RegisterLogin;
