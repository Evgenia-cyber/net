import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = ()=>{
return (
   <nav className={s.nav}>
   <ul>
     <li>
       <NavLink to="/profile" activeClassName={s.activeLink}>Моя страница</NavLink>
     </li>
     <li>
       <NavLink to="/messages" activeClassName={s.activeLink}>Сообщения</NavLink>
     </li>
     <li>
       <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
     </li>
     <li>
       <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
     </li>
     <li>
       <a href="#s">Фотографии</a>
     </li>
     <li>
       <a href="#s">Рисунки</a>
     </li>
     <li>
       <a href="#s">Музыка</a>
     </li>
     <li>
       <a href="#s">Видео</a>
     </li>
     <li>
       <a href="#s">Сообщества</a>
     </li>
     <li>
       <a href="#s">Настройки</a>
     </li>
   </ul>
 </nav>
);
}
export default Sidebar;