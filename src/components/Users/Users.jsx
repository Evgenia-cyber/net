import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import cn from "classnames";

const Users = (props) => {
  return (
    <div>
      <Paginator
        countItemsPerPage={props.countUsersPerPage}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <div className={cn(s.column, s.container)}>
        {props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
        <button className={s.btn_more}>Показать больше</button>
      </div>
    </div>
  );
};

export default Users;
