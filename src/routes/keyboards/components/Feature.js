import React, { Component } from 'react';
import data from '../keyboardInventory';

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    }

    this.filterErgo = this.filterErgo.bind(this);
    this.filterCordless = this.filterCordless.bind(this);
  }

  filterErgo() {
    this.setState({
      data: data.filter(i => {
        return i.feature === 'ergonomic';
      })
    });
  }

  filterCordless() {
    this.setState({
      data: data.filter(i => {
        return i.feature === 'cordless';
      })
    });
  }

  render() {
    return (
      <div>
        <div>Feature:
          <div>
            <button onClick={this.filterErgo}>Ergonomic</button>
            <button onClick={this.filterCordless}>Cordless</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
