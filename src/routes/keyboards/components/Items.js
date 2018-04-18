import React, { Component } from 'react';
import data from '../keyboardInventory';
import Modal from './Modal';
import KeyboardDetail from '../../keyboard-detail/KeyboardDetail';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showArrows: false,
      data: data
    }

    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  render() {
    return this.state.data.map(kb =>
      <li key={kb.id} className="items">
        <div className="image" onMouseEnter={this.showArrows} onMouseLeave={this.hideArrows} onClick={this.showModal}>
          <i className={this.state.showArrows ? 'fa fa-angle-left' : null}></i>
          <img src={kb.img} alt="" width="300" />
          <i className={this.state.showArrows ? 'fa fa-angle-right' : null}></i>
        </div>
        <h2 className="kb-name" onClick={this.showModal}>{kb.name}</h2>
        <h3>Price: ${kb.price}</h3>
        <h3>Rating: {kb.rating}/5</h3>
      </li>
    );
  }
}

export default Items;
