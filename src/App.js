import React from "react";
import "./App.css";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import HeaderMain from "./component/Header.main";
import Activitybar from "./component/Activitybar";
import TemplateRoutine from "./component/TemplateRoutine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./component/PrivateRoute";
import ForgotPassword from './component/ForgotPassword';
import UpdateProfile from './component/UpdateProfile';
import RoutinePage from './component/RoutinePage';
import CreateNewRoutinePage from './component/CreateNewRoutinePage';

function App() {
  return (
      <div>
        <Router>
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/landingPage">
              <LandingPage />
            </Route>
            <PrivateRoute exact path="/update-profile">
              <HeaderMain />
              <UpdateProfile />
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <HeaderMain />
                <div className="app-page">
                  <TemplateRoutine />
                  <Activitybar />
                </div>
            </PrivateRoute>
            <Route path="/create-new">
              <CreateNewRoutinePage />
            </Route>
            <Route path="/ongoing-routine">
              <RoutinePage />
            </Route>
            <Route path="/landingPage">
            <LandingPage />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
