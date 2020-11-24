import { connect } from "react-redux";
import {
  addNewMessageActionCreator,
  changeMessageHandlerActionCreator,
} from "../../redux/messagesReducer";
import Messages from "./Messages";

let mapStateToProps = (state) => ({
  newTextareaText: state.messagePage.newTextareaText,
  state: state.messagePage,
  isAuth: state.auth.isAuth
});

let mapDispatchToProps = (dispatch) => {
  return {
    changeTextareaHandler: (text) => {
      dispatch(changeMessageHandlerActionCreator(text));
    },
    clickHandler: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
export default MessagesContainer;
