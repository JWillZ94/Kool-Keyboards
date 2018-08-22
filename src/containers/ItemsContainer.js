import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeyboards } from '../actions/itemActions';
import '../components/keyboards/Keyboards.css';
// import { changeDisplayItems } from '../selectors/displayDataSelector';
// Container

const mapStateToProps = state => ({
  // items: changeDisplayItems(state)
  items: state.items
});

class ItemsContainer extends Component {
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
