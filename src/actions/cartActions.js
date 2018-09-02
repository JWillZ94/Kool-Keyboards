export const addToCartAction = (actionItem, actionAmt) => ({
  type: 'ADD_TO_CART',
  actionItem,
  actionAmt
});

export const removeFromCartAction = actionItem => ({
  type: 'REMOVE_FROM_CART',
  actionItem
});

export const increaseAmtAction = (actionItem, actionAmt) => ({
  type: 'INCREASE_AMT',
  actionItem,
  actionAmt
});

export const decreaseAmtAction = (actionItem, actionAmt) => ({
  type: 'DECREASE_AMT', 
  actionItem,
  actionAmt
});

export function addToDbCart(item, userId) {
  return dispatch => {
    return fetch(`http://localhost:5000/api/users/${userId}`, {
      method: "POST",
      data: JSON.stringify(item)
    })
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(item => {
        dispatch(addToCartAction(item));
        console.log(item);
      });
  }
}
