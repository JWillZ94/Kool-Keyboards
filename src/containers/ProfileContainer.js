import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoughtItemsContainer from './BoughtItemsContainer';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <p>This is your profile {this.props.user.first_name} {this.props.user.last_name}</p>
        <div>
          <p>Recently Bought Items</p>
          <BoughtItemsContainer />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ProfileContainer);
