import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  return (
    <div>
      <div className={s.info}>
        <div className={s.infoImg}>
          <img
            //  src="https://hypeava.ru/uploads/posts/2018-03/1521909692_4.jpg"
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : "https://hypeava.ru/uploads/posts/2018-03/1521909692_4.jpg"
            }
            alt=""
          />
        </div>
        <div className={s.infoText}>{props.profile.fullName}</div>
      </div>
      <ProfileStatus status="Hello, my friends!" />
    </div>
  );
};

export default ProfileInfo;
