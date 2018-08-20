import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeyboards } from '../actions/itemActions';
import '../components/keyboards/Keyboards.css';
import { changeDisplayItems } from '../selectors/displayDataSelector';
// Container

const mapStateToProps = state => ({
  items: changeDisplayItems(state)
});

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchKeyboards());
  }

  render() {
    return this.props.items === undefined
      ? <p>No products!</p>
      : (
          <ul className="items-list">
            {
              this.props.items.map(kb =>
                <li key={kb._id} className="items">
                  <img src={kb.img} className="image" />
                  <p className="kb-name">{kb.name}</p>
                  <p>{kb.price}</p>
                  <p>{kb.condition}</p>
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
