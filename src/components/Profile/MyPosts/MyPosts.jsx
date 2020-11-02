import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} img={post.img} likesCount={post.likesCount} />
  ));

  let newLink = React.createRef();

  let addNewPost = () => {
    props.addNewPost();
  };

  let changeTextareaHandler = () => {
    let text = newLink.current.value;
    props.changeTextareaHandler(text);
  };

  return (
    <div className={s.my_posts}>
      <h3>Мои посты</h3>
      <div className={s.new_post}>
        <textarea
          value={props.newTextareaText}
          onChange={changeTextareaHandler}
          ref={newLink}
          className={s.send_text}
          rows="3"
          placeholder="Введите текст сообщения"
        />
        <button onClick={addNewPost} className={s.send_btn}>
          Отправить
        </button>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post message='Привет!' img='https://avatarko.ru/img/kartinka/7/ruki_serdce_karandash_6297.jpg' likesCount='8'/>
      <Post message='Привет!!' img='https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg' likesCount='1'/>
      <Post message='Привет!!!' img='https://img1.liveinternet.ru/images/attach/c/1/74/810/74810823_67016084_x_a95de785.jpg' likesCount='28'/> */}
      </div>
    </div>
  );
};
export default MyPosts;
