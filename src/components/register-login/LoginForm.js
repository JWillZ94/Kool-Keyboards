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
            <label>Username: </label>
            <input type="text" name="username" placeholder="Username..." />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" placeholder="Password..." />
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
}

export default LoginForm;
