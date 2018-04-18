import React, { Component } from 'react';
import data from '../keyboardInventory';
import KeyboardDetail from '../../keyboard-detail/KeyboardDetail';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      data: data
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
    return this.state.showModal ? (
      <KeyboardDetail>
        <div className="modal">
          chea chea chea
          <button onClick={this.hideModal}>X</button>
        </div>
      </KeyboardDetail>
    ) : null;
  }
}

export default Modal;
