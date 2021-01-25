import { actionTypes } from 'src/config/constants';

const initialState = {
  auth: {},
  isAuth: false,
  loginLoading: false,
  isFailed: false,
  message: '',
};

const loginAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loginLoading: false,
        isFailed: false,
        message: '',
        auth: payload,
      };

    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        message: payload,
        loginLoading: false,
        isFailed: true,
      };

    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };

    default:
      return state;
  }
};

export default loginAuth;
