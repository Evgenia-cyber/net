import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <div className={s.pagination}>
          <span>1</span>
          <span className={s.selected}>2</span>
          <span>3</span>
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
