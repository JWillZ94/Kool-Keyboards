import React, { Component } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app">
        <Title />
        <Body />
      </div>
    );
  }
}

export default App;
