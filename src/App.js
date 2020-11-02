import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        {/* <Route path='/profile' component={Profile}/>
        <Route path='/messages' component={Messages}/> */}
        <Route
          path="/profile"
          render={() => <Profile/>}
        />
        <Route
          path="/messages"
          render={() => <MessagesContainer/>}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
