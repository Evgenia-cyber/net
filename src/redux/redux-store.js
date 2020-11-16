import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;
