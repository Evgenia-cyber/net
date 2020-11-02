import React from "react";
import { NavLink } from "react-router-dom";

const MessageUser = (props) => {
  return (
    <div>
      {/* <NavLink to={"/messages/" + props.userId}>{props.userName}</NavLink> */}
      <NavLink to={`/messages/${props.userId}`}>{props.userName}</NavLink>
    </div>
  );
};

export default MessageUser;