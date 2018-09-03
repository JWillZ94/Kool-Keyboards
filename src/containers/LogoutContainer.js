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
          <p id="logout-btn" className="btn" onClick={this.handleLogout}>Logout</p>
        </div>;
  }
}

export default connect(
  mapStateToProps
)(LogoutContainer);
