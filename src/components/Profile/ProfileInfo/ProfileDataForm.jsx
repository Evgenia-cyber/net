import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { FormControl } from "../../common/FormControls/FormControls";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ profile, isOwner, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {isOwner && <button>Сохранить данные</button>}
      {error && <div className={s.formError}>{error}</div>}
      <div>
        <b>Имя</b>:{" "}
        <Field
          component={FormControl}
          validate={[required]}
          name="fullName"
          type="text"
          placeholder="Введите Ваше имя"
          fieldtype="input"
        />
      </div>
      <div>
        <b>Ищу работу</b>:{" "}
        <Field
          component={FormControl}
          name="lookingForAJob"
          type="checkbox"
          fieldtype="input"
        />
      </div>
      <div>
        <b>Мои скилы</b>:{" "}
        <Field
          component={FormControl}
          name="lookingForAJobDescription"
          type="text"
          placeholder="Опишите свои скилы"
          fieldtype="textarea"
        />
      </div>

      <div>
        <b>Обо мне</b>:{" "}
        <Field
          component={FormControl}
          validate={[required]}
          name="aboutMe"
          type="text"
          placeholder="Напишите кратко о себе"
          fieldtype="input"
        />
      </div>
      <div>
        <b>Контакты</b>:{" "}
        <div className={s.contacts}>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                <label htmlFor={key}>{key}</label>
                <Field
                  component={FormControl}
                  name={"contacts." + key}
                  type="text"
                  placeholder="Введите адрес"
                  fieldtype="input"
                />
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({ form: "profile-form" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
