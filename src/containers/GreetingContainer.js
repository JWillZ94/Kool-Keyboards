import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const GreetingContainer = () => {
  return this.props.user === undefined
    ? <div>
        <p>Greetings, guest!</p>
      </div>
    : <div>
        <p>Greetings, {this.props.user.username}</p>
      </div>;
}

export default connect(
  mapStateToProps
)(GreetingContainer);
