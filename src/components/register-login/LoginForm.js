import React from 'react';

const LoginForm = ({ handleLogin, isLoggingIn }) => {
  return isLoggingIn
    ? (
        <div>
          <p>Logging in...</p>
        </div>
      )
    : (
        <form onSubmit={handleLogin}>
          <div>
            <input type="text" className="input-box" name="username" placeholder="Username..." />
          </div>
          <div>
            <input type="password" className="input-box" name="password" placeholder="Password..." />
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      );
}

export default LoginForm;
