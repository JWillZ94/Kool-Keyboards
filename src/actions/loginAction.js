export const fetchUserBeginAction = {
  type: 'FETCH_USER_BEGIN'
};

export const fetchUserSuccessAction = user => ({
  type: 'FETCH_USER_SUCCESS',
  user: user
});

export const fetchUserErrorAction = {
  type: 'FETCH_USER_FAILURE'
};

export function fetchUser() {
  return dispatch => {
    dispatch(fetchUserBeginAction);
    return fetch('http://localhost:5000/api/users')
      .then(
        res => res.json(),
        err => console.log("An error occurred: ", err)
      )
      .then(user => dispatch(fetchUserSuccessAction(user)));
  }
}
