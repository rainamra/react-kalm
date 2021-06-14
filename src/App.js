import React from "react";
import "./App.css";
import LandingPage from "./component/landing/LandingPage";
import LoginPage from "./component/credentials/LoginPage";
import SignUp from "./component/credentials/SignUp";
import HeaderMain from "./component/dashboard/Header.main";
import TemplateRoutine from "./component/dashboard/TemplateRoutine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/AuthContext";
import RoutineProvider from "./contexts/RoutineContext";
import PrivateRoute from "./component/PrivateRoute";
import ForgotPassword from './component/credentials/ForgotPassword';
import UpdateProfile from './component/user/UpdateProfile';
import RoutinePage from './component/routine/RoutinePage';
import TemplatePage from './component/routine/TemplatePage';
import LastRoutinePage from './component/routine/LastRoutinePage';
import UpdateRoutine from './component/routine/UpdateRoutine';
import CreateNewRoutinePage from './component/routine/CreateNewRoutinePage';
import axios from "axios";

axios.defaults.baseURL = 'https://us-central1-kalm-react.cloudfunctions.net/app';

function App() {
  return (
      <div>
        <Router>
        <AuthProvider>
          <RoutineProvider>
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
                </div>
            </PrivateRoute>
            <Route path="/create-new">
              <CreateNewRoutinePage />
            </Route>
            <Route path="/update-routine">
              <UpdateRoutine />
            </Route>
            <Route path="/ongoing-routine">
              <RoutinePage />
            </Route>
            <Route path="/template-routine">
              <TemplatePage />
            </Route>
            <Route path="/last-routine">
              <LastRoutinePage />
            </Route>
            <Route path="/landingPage">
            <LandingPage />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
          </RoutineProvider>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
