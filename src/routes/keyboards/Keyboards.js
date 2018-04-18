import React, { Component } from 'react';
import './Keyboards.css';
import data from './keyboardInventory';
import Sort from './components/Sort';
import Condition from './components/Condition';
import Feature from './components/Feature';
import Type from './components/Type';
import KbInterface from './components/KbInterface';
import Brand from './components/Brand';
import Price from './components/Price';
import Items from './components/Items';
import Modal from './components/Modal';

class Keyboards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div>
        <h1>Keyboards</h1>
        <div className="items-menu">
          <div>
            <Sort />
            <Condition />
            <Feature />
            <Type />
            <KbInterface />
            <Brand />
            <Price />
          </div>
          <ul className="items-list">
            <Items />
          </ul>
          <Modal />
        </div>
      </div>
    );
  }
}

export default Keyboards;
