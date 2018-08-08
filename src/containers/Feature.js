import React from 'react';

function Feature() {
  const features = ['None', 'Ergonomic', 'Cordless', 'Any'];

  const featureButtons = features.map(feature =>
    <li key={feature}>
      <button
        className={this.state.active === feature ? 'active-button' : null}
        onClick={this.filterFeature.bind(this, 'None', feature)}
      >{feature}</button>
    </li>
  );

  return (
    <div className="sort-section">
      Feature:
      <ul>
        {featureButtons}
      </ul>
      {this.props.feature}
    </div>
  );
}

export default Feature;
