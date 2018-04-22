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
      activeTypeBoxes: []
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

    this.filterTypeApple = this.filterTypeApple.bind(this);
    this.filterTypeBacklit = this.filterTypeBacklit.bind(this);
    this.filterTypeFullSize = this.filterTypeFullSize.bind(this);
    this.filterTypeGaming = this.filterTypeGaming.bind(this);
    this.filterTypeLargePrint = this.filterTypeLargePrint.bind(this);
    this.filterTypeMechanical = this.filterTypeMechanical.bind(this);
    this.filterTypeSpillResistant = this.filterTypeSpillResistant.bind(this);
    this.filterTypeUltraThin = this.filterTypeUltraThin.bind(this);
    this.filterTypeWindows = this.filterTypeWindows.bind(this);

    this.filterBelow25 = this.filterBelow25.bind(this);
    this.filter25To50 = this.filter25To50.bind(this);
    this.filter50To100 = this.filter50To100.bind(this);
    this.filter100To200 = this.filter100To200.bind(this);
    this.filter200AndUp = this.filter200AndUp.bind(this);
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

  filterTypeApple() {
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

  filterTypeBacklit() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'backlit') {
            return i;
          }
        }
      })
    });
  }

  filterTypeFullSize() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'full-size') {
            return i;
          }
        }
      })
    });
  }

  filterTypeGaming() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'gaming') {
            return i;
          }
        }
      })
    });
  }

  filterTypeLargePrint() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'large-print') {
            return i;
          }
        }
      })
    });
  }

  filterTypeMechanical() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'mechanical') {
            return i;
          }
        }
      })
    });
  }

  filterTypeSpillResistant() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'spill-resistant') {
            return i;
          }
        }
      })
    });
  }

  filterTypeUltraThin() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'ultra-thin') {
            return i;
          }
        }
      })
    });
  }

  filterTypeWindows() {
    this.setState({
      data: data.filter(i => {
        for (var j = 0; j < i.type.length; j++) {
          if (i.type[j] === 'windows') {
            return i;
          }
        }
      })
    });
  }

  filterBelow25() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 0 && i.price <= 24;
      })
    });
  }

  filter25To50() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 25 && i.price <= 50;
      })
    });
  }

  filter50To100() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 50 && i.price <= 100;
      })
    });
  }

  filter100To200() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 100 && i.price <= 200;
      })
    });
  }

  filter200AndUp() {
    this.setState({
      data: data.filter(i => {
        return i.price >= 200 && i.price <= Infinity;
      })
    });
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
            <Type
              filterTypeApple={this.filterTypeApple}
              filterTypeBacklit={this.filterTypeBacklit}
              filterTypeFullSize={this.filterTypeFullSize}
              filterTypeGaming={this.filterTypeGaming}
              filterTypeLargePrint={this.filterTypeLargePrint}
              filterTypeMechanical={this.filterTypeMechanical}
              filterTypeSpillResistant={this.filterTypeSpillResistant}
              filterTypeUltraThin={this.filterTypeUltraThin}
              filterTypeWindows={this.filterTypeWindows}
            />
            <KbInterface />
            <Brand />
            <Price
              filterBelow25={this.filterBelow25}
              filter25To50={this.filter25To50}
              filter50To100={this.filter50To100}
              filter100To200={this.filter100To200}
              filter200AndUp={this.filter200AndUp}
            />
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
