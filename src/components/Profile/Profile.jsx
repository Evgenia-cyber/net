import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// let postsData = [
//   {id:1, message:'Привет!', img:'https://avatarko.ru/img/kartinka/7/ruki_serdce_karandash_6297.jpg', likesCount:10},
//   {id:2, message:'Привет!!', img:'https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg', likesCount:1},
//   {id:3, message:'Привет!!!', img:'https://img1.liveinternet.ru/images/attach/c/1/74/810/74810823_67016084_x_a95de785.jpg', likesCount:100},
// ];

const Profile = (props) => {
  return (
    <div>
      <div className={s.mainImg}>
        <img
          src="https://i.pinimg.com/originals/e0/cd/e4/e0cde4dbe04134ee8216a78e66ccc0ee.jpg"
          alt=""
        />
      </div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
