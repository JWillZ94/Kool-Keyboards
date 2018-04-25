import React, { Component } from 'react';

class Feature extends Component {
  constructor(props) {
    super(props);

    this.filterErgo = this.filterErgo.bind(this);
    this.filterCordless = this.filterCordless.bind(this);
  }

  filterErgo(e) {
    this.props.onChooseErgo(e.target.value);
  }

  filterCordless(e) {
    this.props.onChooseCordless(e.target.value);
  }

  render() {
    return (
      <div>
        <div>Feature:
          <div>
            <button onClick={this.filterErgo}>None</button>
            <button onClick={this.filterErgo}>Ergonomic</button>
            <button onClick={this.filterCordless}>Cordless</button>
            <button onClick={this.filterCordless}>Both</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
