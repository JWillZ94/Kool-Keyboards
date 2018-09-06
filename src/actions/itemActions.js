export const fetchKeyboardsBeginAction = {
  type: 'FETCH_KEYBOARDS_BEGIN'
};

export const fetchKeyboardsSuccessAction = kbs => {
  return {
    type: 'FETCH_KEYBOARDS_SUCCESS',
    items: kbs
  };
}

export const fetchKeyboardsErrorAction = {
  type: 'FETCH_KEYBOARDS_FAILURE'
};

export function fetchKeyboards() {
  return dispatch => {
    dispatch(fetchKeyboardsBeginAction);
    return fetch('/api/kbs')
      .then(
        res => res.json(),
        err => console.log('An error occurred: ', err)
      )
      .then(data => dispatch(fetchKeyboardsSuccessAction(data)));
  }
}
