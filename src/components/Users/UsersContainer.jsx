import React from "react";
import { connect } from "react-redux";
import {
  followAC as follow,
  setCurrentPageAC as setCurrentPage,
  setTotalUsersCountAC as setTotalUsersCount,
  setUsersAC as setUsers,
  togglePreloaderAC as togglePreloader,
  unfollowAC as unfollow,
} from "../../redux/usersReducer";
import { toggleFollowingProcess } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreloader(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.countUsersPerPage)
      .then((data) => {
        this.props.togglePreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.togglePreloader(true);
    usersAPI
      .getUsers(currentPage, this.props.countUsersPerPage)
      .then((data) => {
        this.props.togglePreloader(false);
        this.props.setUsers(data.items);
      });
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
          toggleFollowingProcess={this.props.toggleFollowingProcess}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    countUsersPerPage: state.usersPage.countUsersPerPage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  togglePreloader,
  toggleFollowingProcess,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
