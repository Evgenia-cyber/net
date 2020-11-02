import React from "react";
import s from "./Header.module.css";

const Header=()=>{
   return (
      <header className={s.header}>
      <img
        src="https://avatanplus.com/files/resources/mid/573890f547340154b4f63e2c.png"
        alt="логотип"
      />
    </header>
   );
}
export default Header;