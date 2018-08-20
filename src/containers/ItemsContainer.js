import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeyboards } from '../actions/itemActions';
import '../components/keyboards/Keyboards.css';
// Container

const mapStateToProps = state => ({
  items: state.items
});

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchKeyboards());
  }

  render() {

    return this.props.items.length === 0
      ? <p>Empty!</p>
      : (
          <ul className="items-list">
            {
              this.props.items.kbs.map(kb =>
                <li key={kb._id} className="items">
                  <img src={kb.img} className="image" />
                  <p className="kb-name">{kb.name}</p>
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
