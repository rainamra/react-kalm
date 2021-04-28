import React from "react";
import "./App.css";
import Header from "./component/Header";
import Jumbotron from "./component/Jumbotron";
import { Featured_Corousel, Featured_FriendSound } from "./component/Featured";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import HeaderMain from "./component/Header.main";
import Activitybar from "./component/Activitybar"
import TemplateRoutine from "./component/TemplateRoutine"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/landingPage">
            <Header />
            <Jumbotron />
            <Featured_Corousel />
            <Featured_FriendSound />
            <Contact />
            <Footer />
          </Route>
          <Route>
            <HeaderMain />
            <div className="app-page">
              <TemplateRoutine />
              <Activitybar />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
