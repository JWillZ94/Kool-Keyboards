import React, { Component } from 'react';
import KeyboardDetail from '../../keyboard-detail/KeyboardDetail';
import items from './Items';

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
            items.map(kbInfo =>
              <li key={kbInfo.id}>
                {kbInfo.name}
                {kbInfo.price}
              </li>
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
