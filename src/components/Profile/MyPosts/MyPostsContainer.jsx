import { connect } from "react-redux";
import { addNewPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextareaText: state.profilePage.newTextareaText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPost) => {
      dispatch(addNewPostActionCreator(newPost));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
