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
      data: data,
      dataSorts: [],
      condition: 'Any',
      feature: 'None',
      type: 'Any',
      priceRange: 'None',
      showModal: false,
      val: '',
      active: false,
      activeTypeBoxes: []
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.sortItems = this.sortItems.bind(this);

    this.filterConditions = this.filterConditions.bind(this);

    this.filterFeature = this.filterFeature.bind(this);

    this.filterType = this.filterType.bind(this);

    this.filterPriceRange = this.filterPriceRange.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  sortItems(val) {
    this.setState({
      val: val
    });
    switch (val) {
      case '':
        this.setState({
          data: data.sort((a, b) => {
            return a.id - b.id;
          })
        });
        break;
      case 'asc-price':
        this.setState({
          data: data.sort((a, b) => {
            return a.price - b.price;
          })
        });
        break;
      case 'des-price':
        this.setState({
          data: data.sort((a, b) => {
            return a.price + b.price;
          })
        });
        break;
      case 'rating':
        this.setState({
          data: data.sort((a, b) => {
            return a.rating - b.rating;
          })
        });
        break;
      default:
        this.setState({
          data: data.sort((a, b) => {
            return a.id - b.id;
          })
        });
    }
  }

  filterConditions() {
    switch(this.state.condition) {
      case 'Any':
        this.setState({
          data: data
        });
        break;
      case 'New':
        this.setState({
          data: data.filter(i => {
            return i.condition === 'new';
          })
        });
        break;
      case 'Used':
        this.setState({
          data: data.filter(i => {
            return i.condition === 'used';
          })
        });
        break;
      case 'Refurbished':
        this.setState({
          data: data.filter(i => {
            return i.condition === 'refurbished';
          })
        });
        break;
      default:
        this.setState({
          data: data
        });
    }
  }

  filterFeature() {
    switch(this.state.feature) {
      case 'None':
        this.setState({
          data: data.filter(i => {
            return i.feature === 'none';
          })
        });
        break;
      case 'Ergonomic':
        this.setState({
          data: data.filter(i => {
            return i.feature === 'ergonomic';
          })
        });
        break;
      case 'Cordless':
        this.setState({
          data: data.filter(i => {
            return i.feature === 'cordless';
          })
        });
        break;
      case 'Both':
        this.setState({
          data: data.filter(i => {
            return i.feature === 'ergonomic' && 'cordless'; // must turn into array
          })
        });
        break;
      default:
        this.setState({
          data: data
        });
    }
    this.setState({
      data: data.filter(i => {
        return i.feature === 'ergonomic';
      })
    });
  }

  filterType() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'apple') {
            return i;
          }
        }
      })
    });
  }

  filterPriceRange() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 0 && i.price <= 24;
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Keyboards</h1>
        <div className="items-menu">
          <div>
            <button>Show All</button>
            <Sort val={this.state.val} onChooseSort={this.sortItems} />
            <ul className="sort-list conditions-list">
              Conditions:
              <Condition filterConditions={this.filterConditions} />
              {this.state.condition}
            </ul>
            <Feature filterFeature={this.filterFeature} />
            <Type
              filterType={this.filterType}
            />
            <KbInterface />
            <Brand />
            <Price
              filterPriceRange={this.filterPriceRange}
            />
          </div>
          <ul className="items-list">
            <Items
              data={this.state.data}
              showModal={this.state.showModal}
              onClickItem={this.showModal}
            />
          </ul>
          <Modal data={this.state.data} showModal={this.state.showModal} onCloseModal={this.hideModal} />
        </div>
      </div>
    );
  }
}

export default Keyboards;
