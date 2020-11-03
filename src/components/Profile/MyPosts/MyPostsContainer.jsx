 import { connect } from "react-redux";
import {
  addNewPostActionCreator,
  changeTextareaHandlerActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextareaText: state.profilePage.newTextareaText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addNewPostActionCreator());
    },
    changeTextareaHandler: (text) => {
      dispatch(changeTextareaHandlerActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
