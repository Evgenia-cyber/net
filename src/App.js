import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import { Suspense } from "react";

const Login = React.lazy(() => import("./components/Login/Login"));
const MessagesContainer = React.lazy(() =>
  import("./components/Messages/MessagesContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const News = React.lazy(() => import("./components/News/News"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect from="/" to="/profile" />}
              />
              <Route path="/login" render={() => <Login />} />
              <Route path="/messages" render={() => <MessagesContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="*" render={() => <div>404</div>} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
