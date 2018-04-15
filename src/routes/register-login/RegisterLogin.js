import React, { Component } from 'react';
import './RegisterLogin.css';

class RegisterLogin extends Component {
  render() {
    return (
      <div className="forms">
        <form>
          <h1>Register</h1>
          <div>
            <label for="first_name">First Name</label>
            <input type="text" name="first_name"/>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name"/>
          </div>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username"/>
          </div>
          <div>
            <label for="password1">Password</label>
            <input type="password" name="password1"/>
          </div>
          <div>
            <label for="password2">Confirm Password</label>
            <input type="password" name="password2"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <form>
          <h1>Log In</h1>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input type="password" name="password1" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterLogin;
