const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  users: [
    { id: 1, name: "Vova" },
    { id: 2, name: "Jen" },
  ],
  messages: [
    { id: 1, text: "Hello" },
    { id: 2, text: "Ok" },
  ],
  newTextareaText: " ",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newText = {
        id: 4,
        text: state.newTextareaText,
      };
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newText);
      stateCopy.newTextareaText = "";
      return stateCopy;
    case UPDATE_MESSAGE_TEXT:
      let stateCopy2={...state};
      stateCopy2.newTextareaText = action.newText;
      return stateCopy2;
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeMessageHandlerActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text,
});

export default messagesReducer;
