export const addToCartAction = item => ({
  type: 'ADD_TO_CART',
  item
});

export const removeFromCartAction = item => ({
  type: 'REMOVE_FROM_CART',
  item
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
