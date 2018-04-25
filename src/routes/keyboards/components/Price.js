import React, { Component } from 'react';

class Price extends Component {
  constructor(props) {
    super(props);

    this.filterBelow25 = this.filterBelow25.bind(this);
    this.filter25To50 = this.filter25To50.bind(this);
    this.filter50To100 = this.filter50To100.bind(this);
    this.filter100To200 = this.filter100To200.bind(this);
    this.filter200AndUp = this.filter200AndUp.bind(this);
  }

  filterBelow25(e) {
    this.props.filterBelow25(e.target.value);
  }

  filter25To50(e) {
    this.props.filter25To50(e.target.value);
  }

  filter50To100(e) {
    this.props.filter50To100(e.target.value);
  }

  filter100To200(e) {
    this.props.filter100To200(e.target.value);
  }

  filter200AndUp(e) {
    this.props.filter200AndUp(e.target.value);
  }

  render() {
    return (
      <div>
        Price Ranges:
        <p className="range" onClick={this.filterBelow25}>Under $25</p>
        <p className="range" onClick={this.filter25To50}>$25 to $50</p>
        <p className="range" onClick={this.filter50To100}>$50 to $100</p>
        <p className="range" onClick={this.filter100To200}>$100 to $200</p>
        <p className="range" onClick={this.filter200AndUp}>$200 & Above</p>
        <p className="range" onClick={this.filter200AndUp}>Any Price</p>
      </div>
    );
  }
}

export default Price;
