import React, { Component } from "react";
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
import Signup from "./components/Signup-Login/sign-up";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/navbar/navbar";
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";

class App extends Component {
  state = {
    firstName: "",
    role: ""
  };

  render() {
    return (
      <Router>
        <NavbarHeader></NavbarHeader>
        <Container>
          <Route exact path="/timesheet" component={TimeSheet} />
          <Route exact path="/add-timesheet" component={TimeSheetForm} />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/welcome" component={Welcome} />
        </Container>
      </Router>
    );
  }
}

export default App;
