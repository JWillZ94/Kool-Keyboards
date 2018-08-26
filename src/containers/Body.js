import React, { Component } from 'react';
import Home from '../components/home/Home';
import Keyboards from '../components/keyboards/Keyboards';
import KeyboardDetail from '../components/keyboards/KeyboardDetail';
import Cart from '../components/cart/Cart';
import Profile from '../components/profile/Profile';
import RegisterLogin from '../components/register-login/RegisterLogin';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class Body extends Component {

  render() {

    let authLink;

    if (this.props.user === '') {
      authLink = <li className="nav-item">
        <NavLink to="/register-login" className="nav-link">Sign-Up/Log-In</NavLink>
      </li>;
    } else {
      authLink = <li className="nav-item">
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </li>;
    }

    return (
      <HashRouter>
        <div>

          <ul className="navbar">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/keyboards" className="nav-link">Keyboards</NavLink>
            </li>
            {authLink}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">My Cart</NavLink>
            </li>
          </ul>

          <div className="route-page">
            <Route exact path="/" component={Home} />
            <Route path="/keyboards" component={Keyboards} />
            <Route path="/register-login" component={RegisterLogin} />
            <Route path="/profile" component={Profile} />
            <Route path="/keyboard-detail" component={KeyboardDetail} />
            <Route path="/cart" component={Cart} />
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default connect(
  mapStateToProps
)(Body);
