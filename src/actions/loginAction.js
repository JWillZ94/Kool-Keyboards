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

export function loginUser(username, password) {
  return dispatch => {
    dispatch(loginUserBeginAction);
    return fetch('/api/login', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then(
        res => res.json(),
        err => console.log("An error occurred: ", err)
      )
      .then(user => {
        dispatch(loginUserSuccessAction(user))
      });
  }
}
