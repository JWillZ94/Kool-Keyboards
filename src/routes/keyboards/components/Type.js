import React, { Component } from 'react';

class Type extends Component {
  constructor(props) {
    super(props);

    this.filterTypeApple = this.filterTypeApple.bind(this);
    this.filterTypeBacklit = this.filterTypeBacklit.bind(this);
    this.filterTypeFullSize = this.filterTypeFullSize.bind(this);
    this.filterTypeGaming = this.filterTypeGaming.bind(this);
    this.filterTypeLargePrint = this.filterTypeLargePrint.bind(this);
    this.filterTypeMechanical = this.filterTypeMechanical.bind(this);
    this.filterTypeSpillResistant = this.filterTypeSpillResistant.bind(this);
    this.filterTypeUltraThin = this.filterTypeUltraThin.bind(this);
    this.filterTypeWindows = this.filterTypeWindows.bind(this);
  }

  filterTypeApple(e) {
    this.props.filterTypeApple(e.target.checked);
  }

  filterTypeBacklit(e) {
    this.props.filterTypeBacklit(e.target.checked);
  }

  filterTypeFullSize(e) {
    this.props.filterTypeFullSize(e.target.checked);
  }

  filterTypeGaming(e) {
    this.props.filterTypeGaming(e.target.checked);
  }

  filterTypeLargePrint(e) {
    this.props.filterTypeLargePrint(e.target.checked);
  }

  filterTypeMechanical(e) {
    this.props.filterTypeMechanical(e.target.checked);
  }

  filterTypeSpillResistant(e) {
    this.props.filterTypeSpillResistant(e.target.checked);
  }

  filterTypeUltraThin(e) {
    this.props.filterTypeUltraThin(e.target.checked);
  }

  filterTypeWindows(e) {
    this.props.filterTypeWindows(e.target.checked);
  }

  render() {
    return (
      <div>
        Type:
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeApple}
          />
          <label>Apple</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeBacklit}
          />
          <label>Backlit</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeFullSize}
          />
          <label>Full Size</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeGaming}
          />
          <label>Gaming</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeLargePrint}
          />
          <label>Large Print</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeMechanical}
          />
          <label>Mechanical</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeSpillResistant}
          />
          <label>Spill Resistant</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeUltraThin}
          />
          <label>Ultra Thin</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.filterTypeWindows}
          />
          <label>Windows</label>
        </div>
      </div>
    );
  }
}

export default Type;
