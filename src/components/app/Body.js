import React, { Component } from 'react';
import Home from '../home/Home';
import Keyboards from '../keyboards/Keyboards';
import KeyboardDetail from '../keyboards/KeyboardDetail';
import Cart from '../cart/Cart';
import Profile from '../profile/Profile';
import RegisterLogin from '../register-login/RegisterLogin';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import AuthLinkContainer from '../../containers/AuthLinkContainer';

const Body = () => (
  <HashRouter>
    <div>

      <ul className="navbar">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/keyboards" className="nav-link">Keyboards</NavLink>
        </li>
        <AuthLinkContainer />
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

export default Body;
