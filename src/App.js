import React, { Component } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './App.css';
// import { Provider } from 'react-redux';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     authenticated: false,
  //     username: null,
  //     password1: null,
  //     password2: null,
  //     first_name: 'guest',
  //     last_name: null,
  //     email: null
  //   }
  //
  //   this.changeUser = this.changeUser.bind(this);
  //   this.handleLogin = this.handleLogin.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  //
  // }
  //
  // handleLogin(username, password) {
  //   fetch('/users/login', {
  //     method: 'POST',
  //     mode: 'cors'
  //     headers: new Headers({
  //       'Authorization': 'Basic ' + btoa('username:password'),
  //       'Content-Type': 'application/json'
  //     }),
  //     body: 'A=1&B=2'
  //   })
  //     .then(res => res.json())
  //     .then(user => {
  //       this.setState({
  //         authenticated: true
  //       });
  //       console.log(user.name + " is successfully logged in!");
  //     })
  //     .catch(err => console.log(err));
  //
  // }
  //
  // handleLogout() {
  //   fetch('/users/logout')
  //     .then(res => res.json())
  //     .then(user => console.log(user + " is logged out."))
  //     .catch(err => console.log(err));
  // }
  //
  // changeUser(user) {
  //   this.setState({
  //     first_name: user
  //   });
  // }

  render() {
    return (
      <div className="app">
        <Title />
        <Body />
      </div>
    );
  }
}

// <div className="user-greeting">
//   <p>Hello, {this.state.first_name}</p>
//   <form onSubmit={this.handleLogout}>
//     <button type="submit">Log Out</button>
//   </form>
// </div>

// changeUser={this.changeUser}  Body PROPS'
// handleLogin={this.handleLogin}
// username={this.state.username}
// password1={this.state.password1}
// password2={this.state.password2}
// first_name={this.state.first_name}
// last_name={this.state.last_name}
// email={this.state.email}

export default App;
