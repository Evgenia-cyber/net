import React from "react";
import { Redirect } from "react-router-dom";
import s from "./Messages.module.css";
import MessageText from "./MessageText/MessageText";
import MessageUser from "./MessageUser/MessageUser";

const Messages = (props) => {
  let usersElements = props.state.users.map((user) => (
    <MessageUser key={user.id} userId={user.id} userName={user.name} />
  ));
  let messagesElements = props.state.messages.map((message) => (
    <MessageText key={message.id} text={message.text} />
  ));

  let changeTextareaHandler = (event) => {
    let text = event.target.value;
    props.changeTextareaHandler(text);
  };
  let clickHandler = () => {
    props.clickHandler();
  };
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div className={s.messages}>
        <div className={s.messagesUsers}>
          {usersElements}
          {/* <MessageUser userId="1" userName="Vova" />
        <MessageUser userId="2" userName="Jen" /> */}
        </div>
        <div className={s.messagesTexts}>
          {messagesElements}
          {/* <MessageText text="Ok" />
        <MessageText text="Hello" /> */}
        </div>
      </div>
      <div>
        <textarea
          value={props.newTextareaText}
          onChange={changeTextareaHandler}
          className={s.send_message}
          rows="3"
          placeholder="Введите текст сообщения"
        />
        <button onClick={clickHandler} className={s.send_btn}>
          Отправить
        </button>
      </div>
    </div>
  );
};
export default Messages;
