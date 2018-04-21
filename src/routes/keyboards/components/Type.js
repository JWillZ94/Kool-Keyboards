import React, { Component } from 'react';

class Type extends Component {
  constructor(props) {
    super(props);

    this.filterType = this.filterType.bind(this);
  }

  filterType(e) {
    this.props.onChooseType(e.target.checked);
  }

  render() {
    const labels = ['apple', 'backlit', 'full-size', 'gaming', 'large-print', 'mechanical', 'spill-resistant', 'ultra-thin', 'windows'];

    const typeCheckbox = labels.map(label =>
      <div key={label}>
        <input
          type="checkbox"
          onChange={this.filterType}
          value={this.props.val}
          checked={ this.props.active ? console.log(`${label} yes`) : console.log(`${label} no`) }
        />
        <label>{label}</label>
      </div>
    );

    return (
      <div>
        Type:
        {typeCheckbox}
      </div>
    );
  }
}

export default Type;
