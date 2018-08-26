import React from 'react';

const RegisterForm = ({ handleRegister, isRegistering }) => {
  return isRegistering
    ? (
        <div>
          <p>Registering...</p>
        </div>
      )
    : (
        <form onSubmit={handleRegister}>
          <div>
            <label>Username: </label>
            <input type="text" name="username" placeholder="Username..." />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" placeholder="Password..." />
          </div>
          <div>
            <label>First Name: </label>
            <input type="text" name="first_name" placeholder="First name..." />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" name="last_name" placeholder="Last name..." />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" placeholder="Email..." />
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
}

export default RegisterForm;
