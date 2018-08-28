const initialState = {
  isWaiting: false,
  authenticated: false,
  user: '',
  cart: [
    item: {
      kb: {},
      amt: 0
    }
  ],
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
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
        cart: () => {
          return Object.assign([], state.cart, () => {
            for (let i = 0; i < state.cart.length; i++) {
              if (state.cart[i].kb === action.actionItem.actionKb) {
                return Object.assign({}, state.cart.item, {
                  amt: action.actionItem.actionAmt
                })
              }
            }
          })
          if (state.cart.item.includes(state.cart.item.kb)) {
            return Object.assign({}, state.cart.item, {

            })
          } else {
            return Object.assign([], state.cart, {
              cart.item: {
                kb: action.item.kb,
                amt: action.item.amt
              }
            })
          }
        }
      });
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        cart: state.cart.filter(i => i === action.item)
      })
    default:
      return state;
  }
}

export default authReducer;
