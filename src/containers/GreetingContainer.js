import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

class GreetingContainer extends Component {
  render() {
    return this.props.user === ''
      ? <div id="greeting">
          <p>Greetings, guest!</p>
        </div>
      : <div id="greeting">
          <p>Greetings, {this.props.user.first_name}!</p>
        </div>;
  }
}

export default connect(
  mapStateToProps
)(GreetingContainer);
