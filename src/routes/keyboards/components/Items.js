import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);

    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);

    this.showModal = this.showModal.bind(this);
  }

  showArrows(e) {
    this.props.onAreaEnter(e.target.value);
  }

  hideArrows(e) {
    this.props.onAreaLeave(e.target.value);
  }

  showModal(e) {
    this.props.onClickItem(e.target.value);
  }

  render() {
    return this.props.data.map(kb =>
      <li key={kb.id} className="items">
        <div className="image" onMouseEnter={this.showArrows} onMouseLeave={this.hideArrows} onClick={this.showModal}>
          <i className={this.props.showArrows ? 'fa fa-angle-left' : null}></i>
          <img src={kb.img} alt="" width="300" />
          <i className={this.props.showArrows ? 'fa fa-angle-right' : null}></i>
        </div>
        <h2 className="kb-name" onClick={this.showModal}>{kb.name}</h2>
        <h3>Price: ${kb.price}</h3>
        <h3>Rating: {kb.rating}/5</h3>
      </li>
    );
  }
}

export default Items;
