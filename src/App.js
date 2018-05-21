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
  }

  render() {
    return (
      <div className="app">
        <Title />
        <p>{this.state.user}</p>
        <Body />
      </div>
    );
  }
}

export default App;
