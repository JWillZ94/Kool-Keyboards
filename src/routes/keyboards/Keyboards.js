import React, { Component } from 'react';
import './Keyboards.css';
import { Link } from 'react-router-dom';
import data from './keyboardInventory';
import KeyboardDetail from '../keyboard-detail/KeyboardDetail';

class Keyboards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.showArrows = this.showArrows.bind(this);
  }

  showArrows() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  render() {
    const items = data.map(kb =>
      <li key={kb.id} className="items">
        <div className="image" onMouseEnter={this.showArrows} onMouseLeave={this.showArrows}>
          <i className={this.state.active ? 'fa fa-angle-left' : null}></i>
          <Link to="/keyboard-detail">
            <img src={kb.img} alt="image" width="300" />
          </Link>
          <i className={this.state.active ? 'fa fa-angle-right' : null}></i>
        </div>
        <h2>
          <Link to="/keyboard-detail">{kb.name}</Link>
        </h2>
        <h3>{kb.size}</h3>
        <h4>{kb.color}</h4>
      </li>
    );
    return (
      <div>
        <h1>Keyboards</h1>
        <ul className="items-list">{items}</ul>
      </div>
    );
  }
}

export default Keyboards;
