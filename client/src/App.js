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
import ManagerInputForm from "./components/ManagerInput/index.js";
import MatProcurmentForm from "./components/matprocurment-form/matprocurment-form";
import Manager1 from "./components/Manager1/index.js";

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
          <Route exact path="/add-material" component={MatProcurmentForm} />
          <Route exact path="/manager-input" component={ManagerInputForm} />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/projects" component={Manager1} />
        </Container>
      </Router>
    );
  }
}

export default App;
