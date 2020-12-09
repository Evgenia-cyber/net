export const getUsers = (state) => {
  return state.usersPage.users;
};
export const getCountUsersPerPage = (state) => {
  return state.usersPage.countUsersPerPage;
};
export const getTotalCount = (state) => {
  return state.usersPage.totalCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
