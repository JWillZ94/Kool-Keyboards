import React, { Component } from 'react';
import './Keyboards.css';
import myCart from '../cart/myCart';
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
      data: [],
      user: null,
      val: '',
      condition: 'Any',
      feature: 'Any',
      type: 'Any',
      activeTypeBoxes: [],
      priceRange: 'Any Price',
      showModal: null,
      active: false,
      addToCart: null
    }

    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
    //
    // this.showAll = this.showAll.bind(this);
    //
    // this.sortItems = this.sortItems.bind(this);
    //
    // this.filterConditions = this.filterConditions.bind(this);
    //
    // this.filterFeature = this.filterFeature.bind(this);
    //
    // this.filterType = this.filterType.bind(this);
    //
    // this.filterPriceRange = this.filterPriceRange.bind(this);
    //
    // this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ data: res.kbs }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:5000/kbs');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // showModal(id) {
  //   this.setState({
  //     showModal: id
  //   });
  // }
  //
  // hideModal() {
  //   this.setState({
  //     showModal: false
  //   });
  // }
  //
  // showAll() {
  //   this.setState({
  //     data: '',
  //     val: '',
  //     condition: 'Any',
  //     feature: 'Any',
  //     priceRange: 'Any Price'
  //   });
  // }
  //
  // sortItems(val) {
  //   this.setState({
  //     val: val
  //   });
  //   switch (val) {
  //     case '':
  //       this.setState({
  //         data: ''.sort((a, b) => {
  //           return a.id - b.id;
  //         })
  //       });
  //       break;
  //     case 'asc-price':
  //       this.setState({
  //         data: ''.sort((a, b) => {
  //           return a.price - b.price;
  //         })
  //       });
  //       break;
  //     case 'des-price':
  //       this.setState({
  //         data: ''.sort((a, b) => {
  //           return a.price + b.price;
  //         })
  //       });
  //       break;
  //     case 'rating':
  //       this.setState({
  //         data: ''.sort((a, b) => {
  //           return a.rating - b.rating;
  //         })
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         data: data.sort((a, b) => {
  //           return a.id - b.id;
  //         })
  //       });
  //   }
  // }
  //
  // filterConditions(condition) {
  //   this.setState({
  //     condition: condition
  //   });
  //   switch(condition) {
  //     case 'Any':
  //       this.setState({
  //         data: data
  //       });
  //       break;
  //     case 'New':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.condition === 'new';
  //         })
  //       });
  //       break;
  //     case 'Used':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.condition === 'used';
  //         })
  //       });
  //       break;
  //     case 'Refurbished':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.condition === 'refurbished';
  //         })
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         data: data
  //       });
  //   }
  // }
  //
  // filterFeature(feature) {
  //   this.setState({
  //     feature: feature
  //   });
  //   switch(feature) {
  //     case 'None':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.feature === 'none';
  //         })
  //       });
  //       break;
  //     case 'Ergonomic':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.feature === 'ergonomic';
  //         })
  //       });
  //       break;
  //     case 'Cordless':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.feature === 'cordless';
  //         })
  //       });
  //       break;
  //     case 'Any':
  //       this.setState({
  //         data: data
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         data: data
  //       });
  //   }
  // }
  //
  // filterType(type, activeTypeBoxes) {
  //   this.setState({
  //     type: type,
  //     activeTypeBoxes: activeTypeBoxes
  //   });
  //   switch(type) {
  //     case 'Apple':
  //       this.setState({
  //         data: data.filter(i => {
  //           for (var j = 0; j < i.type.length; j++) {
  //             if (i.type[j] === 'apple') {
  //               return i;
  //             }
  //           }
  //         })
  //       });
  //       break;
  //     case 'Backlit':
  //       this.setState({
  //         data: data.filter(i => {
  //           for (var j = 0; j < i.type.length; j++) {
  //             if (i.type[j] === 'backlit') {
  //               return i;
  //             }
  //           }
  //         })
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         data: data
  //       });
  //   }
  // }
  //
  // filterPriceRange(priceRange) {
  //   this.setState({
  //     priceRange: priceRange
  //   });
  //   switch(priceRange) {
  //     case 'Under $25':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.price >= 0 && i.price <= 24;
  //         })
  //       });
  //       break;
  //     case '$25 to $50':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.price >= 25 && i.price <= 50;
  //         })
  //       });
  //       break;
  //     case '$50 to $100':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.price >= 50 && i.price <= 100;
  //         })
  //       });
  //       break;
  //     case '$100 to $200':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.price >= 100 && i.price <= 200;
  //         })
  //       });
  //       break;
  //     case '$200 & Above':
  //       this.setState({
  //         data: data.filter(i => {
  //           return i.price >= 200 && i.price <= Infinity;
  //         })
  //       });
  //       break;
  //     case 'Any Price':
  //       this.setState({
  //         data: data
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         data: data
  //       });
  //   }
  // }
  //
  // addToCart(id) {
  //   this.setState({
  //     addToCart: id
  //   });
  //   return myCart.push(id);
  // }

  // <div>
  //   <button onClick={this.showAll}>Show All</button>
  //   <Sort val={this.state.val} onChooseSort={this.sortItems} />
  //   <Condition condition={this.state.condition} filterConditions={this.filterConditions} />
  //   <Feature feature={this.state.feature} filterFeature={this.filterFeature} />
  //   <Type type={this.state.type} activeTypeBoxes={this.state.activeTypeBoxes} filterType={this.filterType} />
  //   <KbInterface className="sort-section" />
  //   <Brand className="sort-section" />
  //   <Price priceRange={this.state.priceRange} filterPriceRange={this.filterPriceRange} />
  // </div>
  // <Items
  //   data={this.state.data}
  //   showModal={this.state.showModal}
  //   onClickItem={this.showModal}
  //   addToCart={this.addToCart}
  // />
  // <Modal data={this.state.data} showModal={this.state.showModal} onCloseModal={this.hideModal} />

  render() {
    return (
      <div>
        <h1>Keyboards</h1>
        <div className="items-menu">
          <ul>
            {
              this.state.data.map(kb => {
                return(
                  <li key={kb.id}>
                    <p>{kb.name}</p>
                  </li>
                );
              })
            }
          </ul>
          {this.state.user}
        </div>
      </div>
    );
  }
}

export default Keyboards;
