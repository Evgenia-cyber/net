import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  const onSelectedPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.info}>
        <div className={s.infoImg}>
          <img
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            }
            alt=""
          />
          {props.isOwner && <input type="file" onChange={onSelectedPhoto} />}
        </div>
        <div className={s.infoText}>{props.profile.fullName}</div>
      </div>
      <ProfileStatus
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
    </div>
  );
};

export default ProfileInfo;
