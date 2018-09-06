export const logoutUserBeginAction = {
  type: 'LOGOUT_USER_BEGIN'
};

export const logoutUserSuccessAction = {
  type: 'LOGOUT_USER_SUCCESS'
};

export const logoutUserErrorAction = {
  type: 'LOGOUT_USER_FAILURE'
};

export function logoutUser() {
  return dispatch => {
    dispatch(logoutUserBeginAction);
    return fetch('/api/logout')
      .then(
        res => res.json(),
        err => console.log("An error occurred: ", err)
      )
      .then(user => {
        dispatch(logoutUserSuccessAction)
        console.log(user)
      });
  }
}
