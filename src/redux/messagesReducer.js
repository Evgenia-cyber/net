const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  users: [
    { id: 1, name: "Vova" },
    { id: 2, name: "Jen" },
  ],
  messages: [
    { id: 1, text: "Hello" },
    { id: 2, text: "Ok" },
  ]
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,  
            text: action.text,
          },
        ] ,
      };
    default:
      return state;
  }
};

export const addNewMessageActionCreator = (text) => ({ type: ADD_MESSAGE, text });

export default messagesReducer;
