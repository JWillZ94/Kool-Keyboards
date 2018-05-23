import React, { Component } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './App.css';
// import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'no user signed in'
    }

    this.changeUser = this.changeUser.bind(this);

  }

  changeUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <div className="user-greeting">
          <p>Hello, {this.state.user}</p>
          <form action="/users/logout" method="get">
            <button type="submit">Log Out</button>
          </form>
        </div>
        <Body changeUser={this.changeUser} />
      </div>
    );
  }
}

export default App;
