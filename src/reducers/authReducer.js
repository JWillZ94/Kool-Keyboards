const initialState = {
  isWaiting: false,
  authenticated: false,
  user: '',
  cart: [],
  boughtItems: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_BEGIN':
      return Object.assign({}, state, { isWaiting: true });
    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        user: action.user
      });
    case 'LOGIN_USER_FAILURE':
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false
      });
    default:
      return state;
  }
}

export default authReducer;
