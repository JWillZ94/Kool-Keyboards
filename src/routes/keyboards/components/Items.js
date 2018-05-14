import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showArrows: null
    }

    this.hideArrows = this.hideArrows.bind(this);

    this.showModal = this.showModal.bind(this);
  }

  showArrows(props, kb) {
    this.setState({
      showArrows: kb
    });
  }

  hideArrows() {
    this.setState({
      showArrows: null
    });
  }

  showModal(e) {
    this.props.onClickItem(e.target.value);
  }

  render() {
    const items = this.props.data.map(kb =>
      <li key={kb.id} className="items">
        <div
          className="image"
          onMouseEnter={this.showArrows.bind(this, null, kb)}
          onMouseLeave={this.hideArrows}
          onClick={this.showModal}
        >
          <i className={this.state.showArrows === kb ? 'fa fa-angle-left' : null}></i>
          <img src={kb.img} alt="" width="300" />
          <i className={this.state.showArrows === kb ? 'fa fa-angle-right' : null}></i>
        </div>
        <h2 className="kb-name" onClick={this.showModal}>{kb.name}</h2>
        <h3>Price: ${kb.price}</h3>
        <h3>Rating: {kb.rating}/5</h3>
        <p>Condition: {kb.condition}</p>
        <p>Feature: {kb.feature}</p>
        <p>Type: {kb.type}</p>
        <p>Interface: {kb.interface}</p>
        <p>Brand: {kb.brand}</p>
      </li>
    );

    return (
      <div>
        <ul className="items-list">
          {items}
        </ul>
      </div>
    );
  }
}

export default Items;
