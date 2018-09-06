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
      <div id="profile-info">
        <p className="section-title">Welcome to your profile,  {this.props.user.first_name}!</p>
        <div>
          <p id="info">Information</p>
          <p>First name: {this.props.user.first_name}</p>
          <p>Last name: {this.props.user.last_name}</p>
          <p>Username: {this.props.user.username}</p>
          <p>Email: {this.props.user.email}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ProfileContainer);
