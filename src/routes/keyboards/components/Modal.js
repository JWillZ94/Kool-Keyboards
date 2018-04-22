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
          <p>{this.props.data[0].name}</p>
          <button>Add to Cart</button>
          <button onClick={this.hideModal}>X</button>
        </div>
      </KeyboardDetail>
    ) : null;
  }
}

export default Modal;
