import React from 'react';

function Condition() {
  const conditions = ['Any', 'New', 'Used', 'Refurbished'];

  const conditionButtons = conditions.map((condition, i) =>
    <li className="conditions" key={condition}>
      <button
        className={this.state.active === condition ? 'active-button' : null}
        onClick={this.filterConditions.bind(this, 'Any', condition)}
      >
        {condition}
      </button>
    </li>
  );

  return (
    <div className="sort-section">
      Condition:
      <ul>
        {conditionButtons}
      </ul>
      {this.props.condition}
    </div>
  );

}

export default Condition;
