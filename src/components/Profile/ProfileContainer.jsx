import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let mapDispatchToProps = { getUserProfile };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithURLDataContainerComponent);
