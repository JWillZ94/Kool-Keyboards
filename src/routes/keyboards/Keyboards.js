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
      showArrows: false,
      showModal: false,
      val: '',
      active: false,
      low: 0,
      high: 0
    }

    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.sortItems = this.sortItems.bind(this);

    this.filterNew = this.filterNew.bind(this);
    this.filterUsed = this.filterUsed.bind(this);
    this.filterRefurbished = this.filterRefurbished.bind(this);

    this.filterErgo = this.filterErgo.bind(this);
    this.filterCordless = this.filterCordless.bind(this);

    this.filterType = this.filterType.bind(this);

    this.filterPrice = this.filterPrice.bind(this);
  }

  showArrows() {
    this.setState({
      showArrows: true
    });
  }

  hideArrows() {
    this.setState({
      showArrows: false
    });
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

  filterNew() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'new';
      })
    });
  }

  filterUsed() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'used';
      })
    });
  }

  filterRefurbished() {
    this.setState({
      data: data.filter(i => {
        return i.condition === 'refurbished';
      })
    });
  }

  filterErgo() {
    this.setState({
      data: data.filter(i => {
        return i.feature === 'ergonomic';
      })
    });
  }

  filterCordless() {
    this.setState({
      data: data.filter(i => {
        return i.feature === 'cordless';
      })
    });
  }

  filterType() {
    this.setState(prevState => ({
      active: !prevState.active,
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'gaming') {
            return i;
          }
        }
      })
    }));
  }

  filterPrice(low, high) {
    this.setState({
      low: low,
      high: high,
      data: data.filter(i => {
        return i.price >= this.state.low && i.price <= this.state.high;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Keyboards</h1>
        <div className="items-menu">
          <div>
            <Sort val={this.state.val} onChooseSort={this.sortItems} />
            <Condition
              onChooseNew={this.filterNew}
              onChooseUsed={this.filterUsed}
              onChooseRefurbished={this.filterRefurbished}
            />
            <Feature onChooseErgo={this.filterErgo} onChooseCordless={this.filterCordless} />
            <Type val={this.state.val} active={this.state.active} onChooseType={this.filterType} />
            <KbInterface />
            <Brand />
            <Price low={this.state.low} high={this.state.high} priceRange={this.filterPrice} />
          </div>
          <ul className="items-list">
            <Items
              data={this.state.data}
              showModal={this.state.showModal}
              showArrows={this.state.showArrows}
              onAreaEnter={this.showArrows}
              onAreaLeave={this.hideArrows}
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
