import React from "react";
import "./App.css";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import HeaderMain from "./component/Header.main";
import TemplateRoutine from "./component/TemplateRoutine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/AuthContext";
import RoutineProvider from "./contexts/RoutineContext";
import PrivateRoute from "./component/PrivateRoute";
import ForgotPassword from './component/ForgotPassword';
import UpdateProfile from './component/UpdateProfile';
import RoutinePage from './component/RoutinePage';
import TemplatePage from './component/TemplatePage';
import LastRoutinePage from './component/LastRoutinePage';
import UpdateRoutine from './component/UpdateRoutine';
import CreateNewRoutinePage from './component/CreateNewRoutinePage';

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
