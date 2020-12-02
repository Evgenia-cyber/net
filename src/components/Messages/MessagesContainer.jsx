import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addNewMessageActionCreator
} from "../../redux/messagesReducer";
import Messages from "./Messages";

let mapStateToProps = (state) => ({
  newTextareaText: state.messagePage.newTextareaText,
  state: state.messagePage,
});

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (text) => {
      dispatch(addNewMessageActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
