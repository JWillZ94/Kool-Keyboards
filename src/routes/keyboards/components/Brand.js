import React, { Component } from 'react';
import data from '../keyboardInventory';

class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <div>
        <div>Brand:
          <div>
            <input type="checkbox" />
            <label>Microsoft</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Logitech</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>HP</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Corsair</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
