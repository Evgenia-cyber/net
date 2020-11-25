import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addNewMessageActionCreator,
  changeMessageHandlerActionCreator,
} from "../../redux/messagesReducer";
import Messages from "./Messages";

let AuthRedirectComponent = withAuthRedirect(Messages);

let mapStateToProps = (state) => ({
  newTextareaText: state.messagePage.newTextareaText,
  state: state.messagePage,
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
)(AuthRedirectComponent);
export default MessagesContainer;
