import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addNewMessageActionCreator,
  changeMessageHandlerActionCreator,
} from "../../redux/messagesReducer";
import Messages from "./Messages";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
