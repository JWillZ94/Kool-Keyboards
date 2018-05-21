import React, { Component } from 'react';
import KeyboardDetail from '../../keyboard-detail/KeyboardDetail';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    this.props.onCloseModal(e.target.value);
  }

  render() {

    return this.props.showModal ? (
      <KeyboardDetail>
        <div className="modal">
          {
            this.props.data.map(kb =>
              kb.id === this.props.showModal ? (
                <li key={kb.id}>
                  <h2>{kb.name}</h2>
                  <h3>{kb.price}</h3>
                  <h3>Rating: {kb.rating}/5</h3>
                  <p>Condition: {kb.condition}</p>
                  <p>Feature: {kb.feature}</p>
                  <p>Type: {kb.type}</p>
                  <p>Interface: {kb.interface}</p>
                  <p>Brand: {kb.brand}</p>
                </li>
              ) : null
            )
          }
          <button>Add to Cart</button>
          <button onClick={this.hideModal}>X</button>
        </div>
      </KeyboardDetail>
    ) : null;
  }
}

export default Modal;
