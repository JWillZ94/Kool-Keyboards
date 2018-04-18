import React, { Component } from 'react';
import data from '../keyboardInventory';

class KbInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <div>
        <div>Interface:
          <div>
            <input type="checkbox" />
            <label>Bluetooth</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Infrared</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>PS/2</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>USB</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Wireless</label>
          </div>
        </div>
      </div>
    );
  }
}

export default KbInterface;
