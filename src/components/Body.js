import React, { Component } from 'react';
import Home from '../routes/home/Home';
import Keyboards from '../routes/keyboards/Keyboards';
import RegisterLogin from '../routes/register-login/RegisterLogin';
import KeyboardDetail from '../routes/keyboard-detail/KeyboardDetail';
import Cart from '../routes/cart/Cart';
import { HashRouter, Route, NavLink } from 'react-router-dom';

class Body extends Component {
  constructor(props) {
    super(props);

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(props, user) {
    this.props.changeUser(user);
  }

  render() {
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
              <NavLink to="/register-login" className="nav-link">Register/Log-In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">My Cart</NavLink>
            </li>
          </ul>

          <div className="route-page">
            <Route exact path="/" component={Home} />
            <Route path="/keyboards" component={Keyboards} />
            <Route
              path="/register-login"
              render={(props) => <RegisterLogin {...props} changeUser={this.props.changeUser} />}
            />
            <Route path="/keyboard-detail" component={KeyboardDetail} />
            <Route path="/cart" component={Cart} />
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default Body;
