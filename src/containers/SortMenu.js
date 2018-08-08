import React, { Component } from 'react';
import Sort from '../components/keyboards/Sort';
import Price from '../components/keyboards/Price';

class SortMenu extends Component {
  render() {
    return (
      <div>
        <Sort />
        <Price  />
      </div>
    );
  }
}

export default SortMenu;
