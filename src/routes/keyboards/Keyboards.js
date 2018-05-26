import React, { Component } from 'react';
import './Keyboards.css';
import myCart from '../cart/myCart';
import Sort from './components/Sort';
// import Condition from './components/Condition';
// import Feature from './components/Feature';
// import Type from './components/Type';
// import KbInterface from './components/KbInterface';
// import Brand from './components/Brand';
import Price from './components/Price';
import Items from './components/Items';
import Modal from './components/Modal';

class Keyboards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      priceRange: 'Any Price',
      val: '',
      showModal: null,
      addToCart: null
      // condition: 'Any',
      // conditionFilter: null,
      // feature: 'Any',
      // type: 'Any',
      // activeTypeBoxes: [],
      // active: false
    }

    this.handleShowModal = this.handleShowModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.showAll = this.showAll.bind(this);

    this.sortItems = this.sortItems.bind(this);
    this.filterPriceRange = this.filterPriceRange.bind(this);

    this.addToCart = this.addToCart.bind(this);

    // this.filterConditions = this.filterConditions.bind(this);
    // this.filterFeature = this.filterFeature.bind(this);
    // this.filterType = this.filterType.bind(this);

  }

  componentDidMount() {
    this.getKbs()
      .then(res => this.setState({ data: res.kbs }))
      .catch(err => console.log(err));
  }

  getKbs = async () => {
    const response = await fetch('http://localhost:5000/kbs');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  sortItems(val) {
    const data = this.state.data;

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

  filterPriceRange(priceRange) {

    this.setState({
      priceRange: priceRange
    });
    switch(priceRange) {
      case 'Under $25':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs.filter(i => {
              return i.price >= 0 && i.price <= 24;
            })
          }))
          .catch(err => console.log(err));
        break;
      case '$25 to $50':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs.filter(i => {
              return i.price >= 25 && i.price <= 50;
            })
          }))
          .catch(err => console.log(err));
        break;
      case '$50 to $100':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs.filter(i => {
              return i.price >= 50 && i.price <= 100;
            })
          }))
          .catch(err => console.log(err));
        break;
      case '$100 to $200':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs.filter(i => {
              return i.price >= 100 && i.price <= 200;
            })
          }))
          .catch(err => console.log(err));
        break;
      case '$200 & Above':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs.filter(i => {
              return i.price >= 200 && i.price <= Infinity;
            })
          }))
          .catch(err => console.log(err));
        break;
      case 'Any Price':
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs
          }))
          .catch(err => console.log(err));
        break;
      default:
        this.getKbs()
          .then(res => this.setState({
            data: res.kbs
          }))
          .catch(err => console.log(err));
    }
  }

  handleShowModal(id) {
    this.setState({
      showModal: id
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  showAll() {
    const data = this.state.data;
    this.setState({
      data: data,
      val: '',
      priceRange: 'Any Price'
    });
  }

  addToCart(id) {
    this.setState({
      addToCart: id
    });
    return myCart.push(id);
  }

  // filterConditions(condition) {
  //
  //   this.setState({
  //     condition: condition
  //   });
  //   switch(condition) {
  //     case 'Any':
  //
  //       break;
  //     case 'New':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.condition === 'new';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Used':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.condition === 'used';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Refurbished':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.condition === 'refurbished';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     default:
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs
  //         }))
  //         .catch(err => console.log(err));
  //   }
  // }
  //
  // filterFeature(feature) {
  //
  //   this.setState({
  //     feature: feature
  //   });
  //   switch(feature) {
  //     case 'None':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.feature === 'none';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Ergonomic':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.feature === 'ergonomic';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Cordless':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             return i.feature === 'cordless';
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Any':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     default:
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs
  //         }))
  //         .catch(err => console.log(err));
  //   }
  // }
  //
  // filterType(type, activeTypeBoxes) {
  //
  //   this.setState({
  //     type: type,
  //     activeTypeBoxes: activeTypeBoxes
  //   });
  //   switch(type) {
  //     case 'Apple':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             for (var j = 0; j < i.type.length; j++) {
  //               if (i.type[j] === 'apple') {
  //                 return i;
  //               }
  //             }
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     case 'Backlit':
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs.filter(i => {
  //             for (var j = 0; j < i.type.length; j++) {
  //               if (i.type[j] === 'backlit') {
  //                 return i;
  //               }
  //             }
  //           })
  //         }))
  //         .catch(err => console.log(err));
  //       break;
  //     default:
  //       this.getKbs()
  //         .then(res => this.setState({
  //           data: res.kbs
  //         }))
  //         .catch(err => console.log(err));
  //   }
  // }

  // <Condition condition={this.state.condition} filterConditions={this.filterConditions} />
  // <Feature feature={this.state.feature} filterFeature={this.filterFeature} />
  // <Type type={this.state.type} activeTypeBoxes={this.state.activeTypeBoxes} filterType={this.filterType} />
  // <KbInterface className="sort-section" />
  // <Brand className="sort-section" />

  render() {
    return (
      <div>
        <p>Keyboards</p>
        <div className="items-menu">
          <div>
            <button onClick={this.showAll}>Show All</button>
            <Sort val={this.state.val} onChooseSort={this.sortItems} />
            <Price priceRange={this.state.priceRange} filterPriceRange={this.filterPriceRange} />
          </div>
          <Items
            data={this.state.data}
            showModal={this.state.showModal}
            handleShowModal={this.handleShowModal}
            addToCart={this.addToCart}
          />
          <Modal data={this.state.data} showModal={this.state.showModal} onCloseModal={this.hideModal} />
        </div>
      </div>
    );
  }
}

export default Keyboards;
