import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.countUsersPerPage);
  let pages = [];
  // for (let i = 0; i < pagesCount; i++) {
  for (let i = 0; i < 28; i++) {
    //т.к. слишком много пользователей
    pages[i] = i + 1;
  }
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <button
              onClick={() => {
                props.onPageChanged(p);
              }}
              key={p}
              className={props.currentPage === p ? s.selected : undefined}
            >
              {p}
            </button>
          );
        })}
      </div>
      <div className={s.column + " " + s.container}>
        {props.users.map((u) => (
          <div key={u.id} className={s.row + " " + s.border}>
            <div className={s.one}>
              <div className={s.img}>
                <img
                  src={u.photos.small ? u.photos.small : userImg}
                  alt=""
                  className={s.border}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                     props.unfollow(u.id);
                    }}
                  >
                    Подписаться
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Отписаться
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
