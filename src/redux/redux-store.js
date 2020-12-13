import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
