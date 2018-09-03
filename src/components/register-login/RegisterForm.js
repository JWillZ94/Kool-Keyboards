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
            <input type="text" className="input-box" name="username" placeholder="Username..." />
          </div>
          <div>
            <input type="password" className="input-box" name="password" placeholder="Password..." />
          </div>
          <div>
            <input type="text" className="input-box" name="first_name" placeholder="First name..." />
          </div>
          <div>
            <input type="text" className="input-box" name="last_name" placeholder="Last name..." />
          </div>
          <div>
            <input type="email" className="input-box" name="email" placeholder="Email..." />
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      );
}

export default RegisterForm;
