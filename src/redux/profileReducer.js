import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA_TEXT = "UPDATE_TEXTAREA_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

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
  profile: null,
  state: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newTextareaText;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 4,
            message: text,
            img:
              "https://i.pinimg.com/originals/24/37/bd/2437bd9758a684862c11aa9e8f20341a.jpg",
            likesCount: 0,
          },
        ],
        newTextareaText: "",
      };
    case UPDATE_TEXTAREA_TEXT:
      return { ...state, newTextareaText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const changeTextareaHandlerActionCreator = (text) => ({
  type: UPDATE_TEXTAREA_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
