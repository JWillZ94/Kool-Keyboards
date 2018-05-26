import React, { Component } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './App.css';
// import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password1: null,
      password2: null,
      first_name: 'guest',
      last_name: null,
      email: null
    }

    this.changeUser = this.changeUser.bind(this);

  }

  handleLogin(props, username, password) {
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(user => console.log(user + "is successfully logged in!"))
      .catch(err => console.log(err));
  }

  changeUser(user) {
    this.setState({
      first_name: user
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <div className="user-greeting">
          <p>Hello, {this.state.first_name}</p>
          <form action="/users/logout" method="get">
            <button type="submit">Log Out</button>
          </form>
        </div>
        <Body
          changeUser={this.changeUser}
          handleLogin={this.handleLogin}
          username={this.state.username}
          password1={this.state.password1}
          password2={this.state.password2}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
