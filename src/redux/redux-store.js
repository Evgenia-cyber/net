import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
