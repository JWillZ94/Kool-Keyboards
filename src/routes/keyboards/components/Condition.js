import React, { Component } from 'react';
import data from '../keyboardInventory';

class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    }

    this.filterNew = this.filterNew.bind(this);
    this.filterUsed = this.filterUsed.bind(this);
    this.filterRefurbished = this.filterRefurbished.bind(this);
  }

  filterNew() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'new';
      })
    });
  }

  filterUsed() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'used';
      })
    });
  }

  filterRefurbished() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'refurbished';
      })
    });
  }

  render() {
    return (
      <div>
        <div>Condition:
          <div className="conditions">
            <button onClick={this.filterNew}>New</button>
            <button onClick={this.filterUsed}>Used</button>
            <button onClick={this.filterRefurbished}>Refurbished</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Condition;
