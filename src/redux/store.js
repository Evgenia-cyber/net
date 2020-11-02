import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Привет!",
          img:
            "https://avatarko.ru/img/kartinka/7/ruki_serdce_karandash_6297.jpg",
          likesCount: 10,
        },
        {
          id: 2,
          message: "Привет!!",
          img: "https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg",
          likesCount: 1,
        },
        {
          id: 3,
          message: "Привет!!!",
          img:
            "https://img1.liveinternet.ru/images/attach/c/1/74/810/74810823_67016084_x_a95de785.jpg",
          likesCount: 100,
        },
      ],
      newTextareaText: "",
    },
    messagePage: {
      users: [
        { id: 1, name: "Vova" },
        { id: 2, name: "Jen" },
      ],
      messages: [
        { id: 1, text: "Hello" },
        { id: 2, text: "Ok" },
      ],
      newTextareaText: " ",
    },
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    messagesReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
