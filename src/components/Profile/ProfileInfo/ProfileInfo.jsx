import React, { useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) return <Preloader />;

  const onSelectedPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const submit = (formData) => {
    props.saveProfile(formData).then(()=>{ setEditMode(false);});
  };

  return (
    <div className={s.info}>
      <div className={s.infoImg}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
          alt=""
        />
        {props.isOwner && <input type="file" onChange={onSelectedPhoto} />}
      </div>
      {editMode ? (
        <ProfileDataFormReduxForm
          initialValues={props.profile}
          onSubmit={submit}
          profile={props.profile}
          isOwner={props.isOwner}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          activateEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <div>
        <b>Статус</b>:{" "}
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <div>
        <b>{contactTitle}</b>: {contactValue}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && (
        <button onClick={activateEditMode}>Редактировать данные</button>
      )}
      <div>
        <b>Имя</b>: {profile.fullName}
      </div>
      <div>
        <b>Ищу работу</b>: {profile.lookingForAJob ? "да" : "нет"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Мои скилы</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Обо мне</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Контакты</b>:{" "}
        <div className={s.contacts}>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
