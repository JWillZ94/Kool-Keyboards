import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/register-login/RegisterForm';
import { registerUser } from '../actions/registerAction';

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isRegistering: state.authReducer.isWaiting
});

const mapDispatchToProps = dispatch => ({
  handleRegister: (e) => {
    e.preventDefault();
    dispatch(registerUser({
      username: e.target.username.value,
      password: e.target.password.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value
    }))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
