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
      let text = state.newTextareaText;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            text: text,
          },
        ],
        newTextareaText: "",
      };
    case UPDATE_MESSAGE_TEXT:
      return { ...state, newTextareaText: action.newText };
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
