import React, { Component } from 'react';

class Condition extends Component {
  constructor(props) {
    super(props);

    this.filterNew = this.filterNew.bind(this);
    this.filterUsed = this.filterUsed.bind(this);
    this.filterRefurbished = this.filterRefurbished.bind(this);
  }

  filterNew(e) {
    this.props.onChooseNew(e.target.value);
  }

  filterUsed(e) {
    this.props.onChooseUsed(e.target.value);
  }

  filterRefurbished(e) {
    this.props.onChooseRefurbished(e.target.value);
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
