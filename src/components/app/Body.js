import React from 'react';
import Home from '../home/Home';
import Keyboards from '../keyboards/Keyboards';
import KeyboardDetail from '../keyboards/KeyboardDetail';
import Cart from '../cart/Cart';
import { HashRouter, Route, NavLink } from 'react-router-dom';

function Body() {
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
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">My Cart</NavLink>
          </li>
        </ul>

        <div className="route-page">
          <Route exact path="/" component={Home} />
          <Route path="/keyboards" component={Keyboards} />
          <Route path="/keyboard-detail" component={KeyboardDetail} />
          <Route path="/cart" component={Cart} />
        </div>

      </div>
    </HashRouter>
  );
}

export default Body;
