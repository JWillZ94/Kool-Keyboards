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
  // let info = [];
  // let item, newAmt;
  // for (let i of cart) {
  //   item = i.item;
  //   newAmt = i.item.amount_in_stock - i.itemAmt;
  //   info.push({ item, newAmt });
  // }
  // return dispatch => {
  //   dispatch(updateItemAmtBeginAction);
  //   return fetch('http://localhost:5000/api/kbs', {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     data: JSON.stringify(info)
  //   })
  //     .then(
  //       res => res.json(),
  //       err => {
  //         console.log('An error occurred: ', err);
  //       }
  //     )
  //     .then(data => dispatch(updateItemAmtSuccessAction));
  // }
}
