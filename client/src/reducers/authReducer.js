
import {
  AUTH_ERROR,
  ERRORS,
  FAILURE_LOGIN,
  FAILURE_REGISTER,
  LOGOUT,
  SET_CURRENT_USER,
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_REGISTER,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: {},
  errors: [],
};
/*  eslint-disable import/no-anonymous-default-export  */
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };

    case SUCCESSFUL_REGISTER:
    case SUCCESSFUL_LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case FAILURE_REGISTER:
    case AUTH_ERROR:
    case FAILURE_LOGIN:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case ERRORS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
