import { usersAPI } from "../api/api";

const FOLLOW = "my-app/users/FOLLOW";
const UNFOLLOW = "my-app/users/UNFOLLOW";
const SET_USERS = "my-app/users/SET_USERS";
const SET_CURRENT_PAGE = "my-app/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "my-app/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_PRELOADER = "my-app/users/TOGGLE_PRELOADER";
const TOGGLE_IS_FOLLOWING_PROCESS = "my-app/users/TOGGLE_IS_FOLLOWING_PROCESS";

let initialState = {
  users: [],
  countUsersPerPage: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROCESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const togglePreloader = (isFetching) => ({
  type: TOGGLE_PRELOADER,
  isFetching,
});
export const toggleFollowingProcess = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROCESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (currentPage, countUsersPerPage) => {
  return async (dispatch) => {
    dispatch(togglePreloader(true));
    let data = await usersAPI.getUsers(currentPage, countUsersPerPage);
      dispatch(togglePreloader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
};

export const getCurrentPageThunkCreator = (currentPage, countUsersPerPage) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(togglePreloader(true));
    let data = await usersAPI.getUsers(currentPage, countUsersPerPage);
      dispatch(togglePreloader(false));
      dispatch(setUsers(data.items));
  };
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProcess(true, userId));
  let response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingProcess(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProcess(true, userId));
  let response = await usersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(toggleFollowingProcess(false, userId));
};

export default usersReducer;
