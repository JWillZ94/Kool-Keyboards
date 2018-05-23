import React, { Component } from 'react';
import './RegisterLogin.css';

class RegisterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      username: null,
      password: null,
      first_name: null,
      last_name: null,
      email: null
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
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
    fetch('http://localhost:5000/users', {
      method: 'POST',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(user => console.log(user + "is successfully logged in!"))
      .catch(err => console.log(err));
  }

  changeUser(props) {
    this.props.route.changeUser('fred');
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="forms">
        <form method="post">
          <h1>Register</h1>
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
        <form action="/users/login" method="post">
          <h1>Log In</h1>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" placeholder="jman94" onChange={this.changeUsername} />
          </div>
          <div>
            <label for="password1">Password</label>
            <input type="password" name="password1" placeholder="123" onChange={this.changePassword} />
          </div>
          <div>
            <button type="submit" onSubmit={this.changeUser}>Submit</button>
          </div>
        </form>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
      </div>
    );
  }
}

export default RegisterLogin;
