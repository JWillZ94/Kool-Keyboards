export const loginUserBeginAction = {
  type: 'LOGIN_USER_BEGIN'
};

export const loginUserSuccessAction = user => ({
  type: 'LOGIN_USER_SUCCESS',
  user: user
});

export const loginUserErrorAction = {
  type: 'LOGIN_USER_FAILURE'
};

export function loginUser() {
  return dispatch => {
    dispatch(loginUserBeginAction);
    return fetch('http://localhost:5000/api/login', { method: "POST" })
      .then(
        res => res.json(),
        err => console.log("An error occurred: ", err)
      )
      .then(user => {
        dispatch(loginUserSuccessAction(user))
        console.log(user);
      });
  }
}
