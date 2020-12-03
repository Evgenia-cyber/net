import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { FormControl } from "../../common/FormControls/FormControls";
import s from "../../Messages/Messages.module.css";

const maxLength10 = maxLength(10);

const NewMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="newMessage"
          fieldtype="textarea"
          component={FormControl}
          validate={[required, maxLength10]}
          className={s.send_message}
          rows="3"
          placeholder="Введите текст сообщения"
        />
        <button className={s.send_btn}>Отправить</button>
      </form>
    </div>
  );
};

const NewMessageReduxForm = reduxForm({
  form: "newMessage",
})(NewMessageForm);

const NewMessage = (props) => {
  const submit = (formData) => {
    props.addNewMessage(formData.newMessage);
  };
  return <NewMessageReduxForm onSubmit={submit} />;
};

export default NewMessage;
