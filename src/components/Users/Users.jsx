import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countUsersPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalCount / this.props.countUsersPerPage
    );
    let pages = [];
    // for (let i = 0; i < pagesCount; i++) {
      for (let i = 0; i < 28; i++) {//т.к. слишком много пользователей
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
                  this.onPageChanged(p);
                }}
                key={p}
                className={
                  this.props.currentPage === p ? s.selected : undefined
                }
              >
                {p}
              </button>
            );
          })}
        </div>
        <div className={s.column + " " + s.container}>
          {this.props.users.map((u) => (
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
                        this.props.unfollow(u.id);
                      }}
                    >
                      Подписаться
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}
export default Users;
