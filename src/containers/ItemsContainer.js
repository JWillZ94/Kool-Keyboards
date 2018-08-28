import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeyboards } from '../actions/itemActions';
import { addToCartAction } from '../actions/cartActions';
import '../components/keyboards/Keyboards.css';
import Quantity from '../components/keyboards/Quantity';
// import { changeDisplayItems } from '../selectors/displayDataSelector';
// Container

const mapStateToProps = state => ({
  // items: changeDisplayItems(state)
  items: state.itemsReducer.items
});

class ItemsContainer extends Component {
  constructor (props) {
    super(props);

  }

  componentDidMount() {
    this.props.dispatch(fetchKeyboards());
  }

  render() {
    return this.props.items.kbs === undefined
      ? <p>No products!</p>
      : (
          <ul className="items-list">
            {
              this.props.items.kbs.map(kb =>
                <li key={kb._id} className="items">
                  <img src={kb.img} alt="pic" className="image" />
                  <p className="kb-name">{kb.name}</p>
                  <p>Price: {kb.price}</p>
                  <p>Condition: {kb.condition}</p>
                  <p>Amount: {kb.amount_in_stock}</p>
                  <Quantity kb={kb} amt={kb.amount_in_stock} />
                </li>
              )
            }
          </ul>
        );

  }
}

export default connect(
  mapStateToProps
)(ItemsContainer);
