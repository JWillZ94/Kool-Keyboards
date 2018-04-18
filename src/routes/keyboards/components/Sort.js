import React, { Component } from 'react';
import data from '../keyboardInventory';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      val: ''
    }

    this.sortItems = this.sortItems.bind(this);
  }

  sortItems(e) {
    this.setState({
      val: e.target.value
    });
    switch (e.target.value) {
      case '':
        this.setState({
          data: data.sort((a, b) => {
            return a.id - b.id;
          })
        });
        break;
      case 'asc-price':
        this.setState({
          data: data.sort((a, b) => {
            return a.price - b.price;
          })
        });
        break;
      case 'des-price':
        this.setState({
          data: data.sort((a, b) => {
            return a.price + b.price;
          })
        });
        break;
      case 'rating':
        this.setState({
          data: data.sort((a, b) => {
            return a.rating - b.rating;
          })
        });
        break;
      default:
        this.setState({
          data: data.sort((a, b) => {
            return a.id - b.id;
          })
        });
    }
  }

  render() {
    return (
      <div className="items-sort">
        <p>Sort By:
          <select onChange={this.sortItems} value={this.state.val}>
            <option value=""></option>
            <option value="asc-price">Price: Low to High</option>
            <option value="des-price">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </p>
      </div>
    );
  }
}

export default Sort;
