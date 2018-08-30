import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class BoughtItemsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.user.boughtItems === []
      ? <p>{this.props.user.first_name}, you have not bought any items yet!</p>
      : <ul>
          {
            this.props.user.boughtItems.slice(-3).map(kb =>
              <li key={kb._id}>
                <img src={kb.img} />
                <p>{kb.name}</p>
              </li>
            )
          }
        </ul>;
  }
}

export default connect(
  mapStateToProps
)(BoughtItemsContainer);
