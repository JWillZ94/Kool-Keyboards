const initialState = {
  isWaiting: false,
  authenticated: false,
  user: '',
  cart: [],
  cartItem: {},
  kb: {},
  amt: 0,
  boughtItems: [],
  total: 0
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
        user: action.user
      });
    case 'REGISTER_USER_FAILURE':
      return Object.assign({}, state, { isWaiting: false });
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
        cart: [ ...state.cart, {
          item: action.actionItem,
          itemAmt: action.actionAmt
        }]
        // amt: state.amt += action.actionAmt
      });
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        cart: [ ...state.cart ].filter(cartItem => cartItem !== action.actionItem)
      });
    default:
      return state;
  }
}

export default authReducer;
