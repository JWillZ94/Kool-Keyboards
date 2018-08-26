import { connect } from 'react-redux';
import { loginUser } from '../actions/loginAction';
import LoginForm from '../components/register-login/LoginForm';

const mapStateToProps = (state, ownProps) => ({
  isWaiting: state.authReducer.isWaiting,
  user: state.authReducer.user,
  isLoggingIn: state.authReducer.isWaiting
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (e) => {
    e.preventDefault();
    dispatch(loginUser(e.target.username.value, e.target.password.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
