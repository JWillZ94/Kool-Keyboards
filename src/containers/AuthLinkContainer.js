import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class AuthLinkContainer extends Component {
  render() {
    return this.props.user === ''
      ? <li className="nav-item">
          <NavLink to="/register-login" className="nav-link">Sign-Up/Log-In</NavLink>
          <Redirect to="/" />
        </li>
      : <li className="nav-item">
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
          <Redirect to="/profile" />
        </li>;
  }
}

export default connect(
  mapStateToProps
)(AuthLinkContainer);
