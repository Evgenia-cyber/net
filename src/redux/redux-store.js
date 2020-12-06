import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
