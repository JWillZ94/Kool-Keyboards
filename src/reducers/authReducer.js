const initialState = {
  user: null,
  cart: [],
  boughtItems: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      Object.assign({}, state, {
        user: action.user,
        cart: action.user,
        boughtItems: action.user
      });
    default:
      return state;
  }
}

export default authReducer;
