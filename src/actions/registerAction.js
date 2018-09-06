export const registerUserBeginAction = {
  type: 'REGISTER_USER_BEGIN'
};

export const registerUserSuccessAction = user => ({
  type: 'REGISTER_USER_SUCCESS',
  user: user
});

export const registerUserErrorAction = {
  type: 'REGISTER_USER_FAILURE'
};

export function registerUser(newUser) {
  return dispatch => {
    dispatch(registerUserBeginAction);
    return fetch('/api/register', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(
        res => res.json(),
        err => console.log("An error occurred: ", err)
      )
      .then(user => dispatch(registerUserSuccessAction(user)));
  }
}
