import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getCurrentPageThunkCreator,
  getUsersThunkCreator,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
  getCountUsersPerPage,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getTotalCount,
  getUsers,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, countUsersPerPage } = this.props;
    this.props.getUsers(currentPage, countUsersPerPage);
  }

  onPageChanged = (currentPage) => {
    const { countUsersPerPage } = this.props;
    this.props.getCurrentPage(currentPage, countUsersPerPage);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalCount={this.props.totalCount}
          countUsersPerPage={this.props.countUsersPerPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
//*********************************** */
// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     countUsersPerPage: state.usersPage.countUsersPerPage,
//     totalCount: state.usersPage.totalCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    countUsersPerPage: getCountUsersPerPage(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
//*********************************** */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     togglePreloader: (isFetching) => {
//       dispatch(togglePreloaderAC(isFetching));
//     },
//   };
// };
const mapDispatchToProps = {
  follow,
  unfollow,
  // toggleFollowingProcess,
  getUsers: getUsersThunkCreator,
  getCurrentPage: getCurrentPageThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
