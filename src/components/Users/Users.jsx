import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        photoUrl: "https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg",
        name: "Dima",
        status: "I like football",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
      },
      {
        id: 2,
        followed: false,
        photoUrl:
          "https://i.pinimg.com/originals/24/37/bd/2437bd9758a684862c11aa9e8f20341a.jpg",
        name: "Sveta",
        status: "I so pretty",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
      },
      {
        id: 3,
        followed: true,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDDGI9g7O_WOqcrjLIog-GN5SvGl14YUXlLQ&usqp=CAU",
        name: "Stas",
        status: "I like it",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
      },
    ]);
  }

  return (
    <div className={s.column + " " + s.container}>
      {props.users.map((u) => (
        <div key={u.id} className={s.row + " " + s.border}>
          <div className={s.one}>
            <div className={s.img}>
              <img src={u.photoUrl} alt="" className={s.border} />
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
                  <span>{u.location.country + " "}</span>
                  <span>{u.location.city}</span>
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
  );
};
export default Users;
