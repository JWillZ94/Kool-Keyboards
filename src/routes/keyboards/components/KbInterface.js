import React, { Component } from 'react';

class KbInterface extends Component {
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
          <button>Clear</button>
        </div>
      </div>
    );
  }
}

export default KbInterface;
