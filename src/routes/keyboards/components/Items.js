import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showArrows: null
    }

    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);

    this.showModal = this.showModal.bind(this);
  }

  showArrows(index) {
    this.setState({
      showArrows: index
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
    return this.props.data.map((kb, i) =>
      <li key={kb.id} index={i} className="items">
        <div className="image" onMouseEnter={this.showArrows} onMouseLeave={this.hideArrows} onClick={this.showModal}>
          <i className={this.state.showArrows === i ? 'fa fa-angle-left' : null}></i>
          <img src={kb.img} alt="" width="300" />
          <i className={this.state.showArrows === i ? 'fa fa-angle-right' : null}></i>
        </div>
        <h2 className="kb-name" onClick={this.showModal}>{kb.name}</h2>
        <h3>Price: ${kb.price}</h3>
        <h3>Rating: {kb.rating}/5</h3>
      </li>
    );
  }
}

export default Items;
