import { isEmpty } from "lodash"; //isEmpty is missing inside the brackets, use "npm i radash"
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
  isAuthenticated: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  user: {},
  errors: [],
};

export default function authReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
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
