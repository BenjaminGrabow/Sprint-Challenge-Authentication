import * as types from './actions';

const initialState = {
  loading: false,
  error: null,
  loggingIn: false,
  jokes: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state };

    case types.LOGIN_START:
      return { ...state, loggingIn: true };

    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };

    case types.LOGIN_FAIL:
      return { ...state, loggingIn: false, error: action.payload }

      case types.FETCH_JOKES:
        return { ...state, jokes: action.payload }
    

    default: return state;
  }
};

export default reducer;