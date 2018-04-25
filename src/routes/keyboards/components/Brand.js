import React, { Component } from 'react';

class Brand extends Component {
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
          <button>Clear</button>
        </div>
      </div>
    );
  }
}

export default Brand;
