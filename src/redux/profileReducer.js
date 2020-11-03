const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_TEXT = "UPDATE-TEXTAREA-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Привет!",
      img: "https://avatarko.ru/img/kartinka/7/ruki_serdce_karandash_6297.jpg",
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newTextareaText,
        img: "https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg",
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newTextareaText = "";
      return stateCopy;
    case UPDATE_TEXTAREA_TEXT:
      let stateCopy2 = { ...state };
      stateCopy2.newTextareaText = action.newText;
      return stateCopy2;
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const changeTextareaHandlerActionCreator = (text) => ({
  type: UPDATE_TEXTAREA_TEXT,
  newText: text,
});

export default profileReducer;
