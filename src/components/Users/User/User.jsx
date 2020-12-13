import React from "react";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import userImg from "../../../assets/images/user.jpg";

const User = ({user,followingInProgress, unfollow,follow})=>{
return (
   <div className={s.row + " " + s.border}>
   <div className={s.one}>
     <div className={s.img}>
       <NavLink to={"/profile/" + user.id}>
         <img
           src={user.photos.small ? user.photos.small : userImg}
           alt=""
           className={s.border}
         />
       </NavLink>
     </div>
     <div>
       {user.followed ? (
         <button
           disabled={followingInProgress.some(
             (id) => id === user.id
           )}
           onClick={() => {
            unfollow(user.id);
           }}
         >
           Отписаться
         </button>
       ) : (
         <button
           disabled={followingInProgress.some(
             (id) => id === user.id
           )}
           onClick={() => {
             follow(user.id);
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
         <div className={s.infoName}>{user.name}</div>
         <div>
           <span>{'user.location.country + " "'}</span>
           <span>{"user.location.city"}</span>
         </div>
       </div>
       <div className={s.row + " " + s.infoStatus}>
         <div>{user.status}</div>
       </div>
     </div>
   </div>
 </div>
)
}

export default User;