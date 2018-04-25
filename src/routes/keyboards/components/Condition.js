import React, { Component } from 'react';

class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    }
  }

  filterConditions(props, condition, i) {
    this.setState({
      active: i
    });

    this.props.filterConditions(condition);
  }

  render() {
    const conditions = ['Any', 'New', 'Used', 'Refurbished'];

    return conditions.map((condition, i) =>
      <li className="conditions" key={condition}>
        <button className={this.state.active === i ? 'active-button' : null} onClick={this.filterConditions.bind(this, i, i)}>
          {condition}
        </button>
      </li>
    );
  }
}

export default Condition;
