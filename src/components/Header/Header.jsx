import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://avatanplus.com/files/resources/mid/573890f547340154b4f63e2c.png"
        alt="логотип"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? <div>{props.login}</div> : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
