import React, { Component } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="app">
        <Title />
        {this.state.response}
        <Body />
      </div>
    );
  }
}

export default App;
