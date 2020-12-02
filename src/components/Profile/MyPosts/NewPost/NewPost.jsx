import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "../../MyPosts/MyPosts.module.css";

const NewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={s.new_post}>
        <Field
          component="textarea"
          name="newPost"
          className={s.send_text}
          rows="3"
          placeholder="Введите текст сообщения"
        />
        <button className={s.send_btn}>Отправить</button>
      </form>
    </div>
  );
};
const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPostForm);
const NewPost = (props) => {
  const submit = (formData) => {
    props.addNewPost(formData.newPost);
  };
  return <NewPostReduxForm onSubmit={submit} />;
};

export default NewPost;
