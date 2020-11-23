import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_IS_FOLLOWING_PROCESS = "TOGGLE_IS_FOLLOWING_PROCESS";

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
  return (dispatch) => {
    dispatch(togglePreloader(true));
    usersAPI.getUsers(currentPage, countUsersPerPage).then((data) => {
      dispatch(togglePreloader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const getCurrentPageThunkCreator = (currentPage, countUsersPerPage) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(togglePreloader(true));
    usersAPI.getUsers(currentPage, countUsersPerPage).then((data) => {
      dispatch(togglePreloader(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProcess(true, userId));
  usersAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProcess(true, userId));
  usersAPI.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProcess(false, userId));
  });
};

export default usersReducer;
