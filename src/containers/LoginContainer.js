import { connect } from 'react-redux';
import { loginUser } from '../actions/loginAction';
import LoginForm from '../components/register-login/LoginForm';

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (e) => {
    dispatch(loginUser());
    e.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
