import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
  return (
    <div>
      <Paginator
        countUsersPerPage={props.countUsersPerPage}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <div className={s.column + " " + s.container}>
        {props.users.map((u) => (
          <div key={u.id} className={s.row + " " + s.border}>
            <div className={s.one}>
              <div className={s.img}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small ? u.photos.small : userImg}
                    alt=""
                    className={s.border}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </div>
            <div className={s.three}>
              <div>
                <div className={s.row + " " + s.info}>
                  <div className={s.infoName}>{u.name}</div>
                  <div>
                    <span>{'u.location.country + " "'}</span>
                    <span>{"u.location.city"}</span>
                  </div>
                </div>
                <div className={s.row + " " + s.infoStatus}>
                  <div>{u.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className={s.btn_more}>Показать больше</button>
      </div>
    </div>
  );
};

export default Users;
