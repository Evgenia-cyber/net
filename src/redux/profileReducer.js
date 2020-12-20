import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "my-app/profile/ADD_POST";
const DELETE_POST = "my-app/profile/DELETE_POST";
const SET_USER_PROFILE = "my-app/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "my-app/profile/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "my-app/profile/ SAVE_PHOTO_SUCCESS";

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
  profile: null,
  state: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 4,
            message: action.newPost,
            img:
              "https://i.pinimg.com/originals/24/37/bd/2437bd9758a684862c11aa9e8f20341a.jpg",
            likesCount: 0,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export const addNewPostActionCreator = (newPost) => ({
  type: ADD_POST,
  newPost,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};
export const updateUserStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  } catch (error) {
    alert(error);
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    const message = response.data.messages[0];
    const array = message.split("->");
    const contact = array[1].slice(0, -1).toLowerCase();
    dispatch(stopSubmit("profile-form", { contacts: { [contact]: message } }));
    return Promise.reject(message);
  }
};

export default profileReducer;
