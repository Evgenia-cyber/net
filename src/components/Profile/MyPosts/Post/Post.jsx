import React from "react";
import s from "./Post.module.css";

const Post = (props)=>{
  // debugger;
   return (
        <div className={s.post}>
        <div className={s.post_avatar}>
<img src={props.img} alt=""/>
        </div>
   <div className={s.post_text}>{props.message}</div>
        <div>
   <span>{props.likesCount}&#9829;</span>
        </div>
        </div>
   );
}
export default Post;