export const FETCH_KEYBOARDS_BEGIN = "FETCH_KEYBOARDS_BEGIN";
export const FETCH_KEYBOARDS_SUCCESS = 'FETCH_KEYBOARDS_SUCCESS';
export const FETCH_KEYBOARDS_FAILURE = 'FETCH_KEYBOARDS_FAILURE';

export const fetchKeyboardsBegin = () => ({
  type: FETCH_KEYBOARDS_BEGIN
});

export const fetchKeyboardsSuccess = keyboards => ({
  type: FETCH_KEYBOARDS_SUCCESS,
  payload: { keyboards }
});

export const fetchKeyboardsError = error => ({
  type: FETCH_KEYBOARDS_FAILURE,
  payload: { error }
});
