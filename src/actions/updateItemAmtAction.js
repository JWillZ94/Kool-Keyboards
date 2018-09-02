export const updateItemAmtBeginAction = {
  type: 'UPDATE_KEYBOARD_AMT_BEGIN'
};

export const updateItemAmtSuccessAction = {
  type: 'UPDATE_KEYBOARD_AMT_SUCCESS'
};

export const updateItemAmtErrorAction = {
  type: 'UPDATE_KEYBOARD_AMT_FAILURE'
};

export function updateKeyboardAmt(cart) {
  console.log(cart);
  return dispatch => {
    dispatch(updateItemAmtBeginAction);
    return fetch('http://localhost:5000/api/kbs', {
      method: "PUT",
      data: JSON.stringify(cart)
    })
      .then(
        res => res.json(),
        err => console.log('An error occurred: ', err)
      )
      .then(data => dispatch(updateItemAmtSuccessAction));
  }
}
