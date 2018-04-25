import React, { Component } from 'react';

class Type extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: []
    }

    this.filterType = this.filterType.bind(this);
  }

  filterType(e) {
    this.props.filterType(e.target.checked);
  }

  render() {
    const types = ['Apple', 'Backlit', 'Full Size', 'Gaming', 'Large Print', 'Mechanical', 'Spill Resistant', 'Ultra Thin', 'Windows'];

    const typeChoices = types.map((type, i) =>
      <li key={type}>
        <input
          type="checkbox"
          onChange={this.filterType}
        />
        <label>{type}</label>
      </li>
    );

    return (
      <div>
        Type:
        <ul>
          {typeChoices}
        </ul>
        <button>Clear</button>
      </div>
    );
  }
}

export default Type;
