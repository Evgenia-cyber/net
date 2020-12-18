import React from "react";
import { Contact } from "./ProfileInfo";

const ProfileDataForm=({profile, isOwner, deactivateEditMode})=>{
   return (
    <form>
    {isOwner && (
      <button onClick={deactivateEditMode}>Сохранить данные</button>
    )}
    <div>
      <b>Имя</b>: {profile.fullName}
    </div>
    <div>
      <b>Ищу работу</b>: {profile.lookingForAJob}
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
      <div >
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
  </form>
    );
}

export default ProfileDataForm;