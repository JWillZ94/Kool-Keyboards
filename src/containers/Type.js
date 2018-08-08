import React, { Component } from 'react';

class Type extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  filterType(e, props, type, activeTypeBoxes) {
    this.setState(prevState => ({
      active: !prevState.active
    }));
    // if (this.state.active === true) {
    //   this.props.activeTypeBoxes.push(type);
    // } else {
    //   this.props.activeTypeBoxes.splice(type, 1);
    // }
    // this.props.filterType(type, activeTypeBoxes);
  }

  render() {
    const types = ['Apple', 'Backlit', 'Full Size', 'Gaming', 'Large Print', 'Mechanical', 'Spill Resistant', 'Ultra Thin', 'Windows'];

    const typeChoices = types.map(type =>
      <li key={type}>
        <input
          type="checkbox"
          onChange={this.filterType.bind(this, '', type)}
        />
        <label>{type}</label>
      </li>
    );

    return (
      <div className="sort-section">
        Type:
        <ul>
          {typeChoices}
        </ul>
        <button>Clear</button>
        {this.state.active}
      </div>
    );
  }
}

export default Type;
