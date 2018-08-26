import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/logoutAction';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class LogoutContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return this.props.user === ''
      ? <div></div>
      : <div>
          <button onClick={this.handleLogout}>Logout</button>
        </div>;
  }
}

export default connect(
  mapStateToProps
)(LogoutContainer);
