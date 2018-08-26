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
        user: action.user,
        cart: action.user.cart,
        boughtItems: action.user.boughtItems
      });
    case 'LOGIN_USER_FAILURE':
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false
      });
    case 'LOGOUT_USER_BEGIN':
      return Object.assign({}, state, { isWaiting: true });
    case 'LOGOUT_USER_SUCCESS':
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        user: '',
        cart: [],
        boughtItems: []
      });
    case 'LOGOUT_USER_FAILURE':
      return Object.assign({}, state, { isWaiting: false });
    case 'REGISTER_USER_BEGIN':
      return Object.assign({}, state, { isWaiting: true });
    case 'REGISTER_USER_SUCCESS':
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        user: action.user,
        cart: action.user.cart,
        boughtItems: action.user.boughtItems
      });
    case 'REGISTER_USER_FAILURE':
      return Object.assign({}, state, { isWaiting: false });
    default:
      return state;
  }
}

export default authReducer;
