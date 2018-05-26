import React, { Component } from 'react';
import './RegisterLogin.css';

class RegisterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsername: null,
      loginPassword: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // componentDidMount() {
  //   this.getUsers()
  //     .then(res => this.setState({ users: res.users }))
  //     .catch(err => console.log(err));
  // }
  //
  // getUsers = async () => {
  //   const response = await fetch('http://localhost:5000/users');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(username, password) {
    this.props.handleLogin(username, password);
  }

  render() {
    return (
      <div className="forms">
        <form method="post">
          <p>Register</p>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input type="password" name="password1" />
          </div>
          <div>
            <label for="password2">Confirm Password</label>
            <input type="password" name="password2"/>
          </div>
          <div>
            <label for="first_name">First Name</label>
            <input type="text" name="first_name"/>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name"/>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <form onSubmit={this.handleLogin.bind(this, this.state.loginUsername, this.state.loginPassword)}>
          <p>Log In</p>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              name="loginUsername"
              value={this.state.loginUsername}
              onChange={this.handleInputChange}
              placeholder="jman94"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              type="password"
              name="loginPassword"
              value={this.state.loginPassword}
              onChange={this.handleInputChange}
              placeholder="123"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <p>{this.state.loginUsername}</p>
        <p>{this.state.loginPassword}</p>
      </div>
    );
  }
}

export default RegisterLogin;
