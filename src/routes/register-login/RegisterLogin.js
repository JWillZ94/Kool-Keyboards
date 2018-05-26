import React, { Component } from 'react';
import './RegisterLogin.css';

class RegisterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      username: null,
      password1: null,
      password2: null,
      first_name: null,
      last_name: null,
      email: null
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

  handleLogin(props, username, password) {
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(user => console.log(user + "is successfully logged in!"))
      .catch(err => console.log(err));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
        <form onSubmit={this.handleLogin.bind(this, this.state.username, this.state.password)}>
          <p>Log In</p>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="jman94"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              type="password"
              name="password1"
              value={this.state.password1}
              onChange={this.handleInputChange}
              placeholder="123"
            />
          </div>
          <div>
            <button onClick={this.changeUser}>Submit</button>
          </div>
        </form>
        <p>{this.state.username}</p>
        <p>{this.state.password1}</p>
      </div>
    );
  }
}

export default RegisterLogin;
