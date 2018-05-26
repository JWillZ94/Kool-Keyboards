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
              kb._id === this.props.showModal ? (
                <li key={kb._id} className="modal-list-item">
                  <div className="modal-list-section-1">
                    <img src={kb.img} width="300" alt="" />
                    <p className="modal-big-text product-name">{kb.name}</p>
                  </div>
                  <div className="modal-list-section-2">
                    <p className="modal-big-text">Price: ${kb.price}</p>
                    <p className="modal-big-text">Rating: {kb.rating}/5</p>
                    <p className="modal-text">Condition: {kb.condition}</p>
                    <p className="modal-text">Feature: {kb.feature}</p>
                    <ul className="modal-text modal-info-list">
                      Type: {
                        kb.type.map(type =>
                          (
                            <li key={type}>{type}</li>
                          )
                        )
                      }
                    </ul>
                    <ul className="modal-text modal-info-list">
                      Interface: {
                        kb.interface.map(int =>
                          (
                            <li key={int}>{int}</li>
                          )
                        )
                      }
                    </ul>
                    <p className="modal-text">Brand: {kb.brand}</p>
                    <button>Add to Cart</button>
                  </div>
                </li>
              ) : null
            )
          }

          <button className="close-modal" onClick={this.hideModal}>X</button>
        </div>
      </KeyboardDetail>
    ) : null;
  }
}

export default Modal;
