export const fetchKeyboardsBegin = () => ({
  type: 'FETCH_KEYBOARDS_BEGIN'
});

export const fetchKeyboardsSuccess = keyboards => ({
  type: 'FETCH_KEYBOARDS_SUCCESS',
  payload: { keyboards }
});

export const fetchKeyboardsError = error => ({
  type: 'FETCH_KEYBOARDS_FAILURE',
  payload: { error }
});
