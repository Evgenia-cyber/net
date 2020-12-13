import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "my-app/app/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  const promiseFromAuth = dispatch(getAuthUserData());
  Promise.all([promiseFromAuth]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
