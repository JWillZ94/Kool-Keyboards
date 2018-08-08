import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.sortItems = this.sortItems.bind(this);
  }

  sortItems(e) {
    this.props.onChooseSort(e.target.value);
  }

  render() {
    return (
      <div className="items-sort sort-menu-item">
        <p>Sort By:
          <select onChange={this.sortItems} value={this.props.val}>
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
