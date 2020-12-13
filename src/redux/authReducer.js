import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "my-app/auth/SET_AUTH_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth },
});

export const getAuthUserData = () =>async (dispatch) => {
   let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data; //деструктуризация - получаем из объекта его свойства в одноименные переменные
      dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const errorMessage =
        response.data.messages.length > 0 ? response.data.messages[0] : "Error";
      const action = stopSubmit("login", { _error: errorMessage });
      dispatch(action);
    }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
