import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
   return (
       <div className={s.info}>
         <div className={s.infoImg}>
           <img
             src="https://hypeava.ru/uploads/posts/2018-03/1521909692_4.jpg"
             alt=""
           />
         </div>
         <div className={s.infoText}>аватар + описание</div>
       </div>
   );
 };

 export default ProfileInfo;