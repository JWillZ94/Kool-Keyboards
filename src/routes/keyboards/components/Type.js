import React, { Component } from 'react';
import data from '../keyboardInventory';

class Type extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <div>
        <div>Type:
          <div>
            <input type="checkbox" />
            <label>Apple</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Backlit</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Full Size</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Gaming</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Large Print</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Mechanical</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Spill Resistant</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Ultra Thin</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Windows</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Type;
