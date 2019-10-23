import React, { Component } from "react";
<<<<<<< HEAD
import Routes from './router';
import Manager1 from './components/Manager1';

=======
>>>>>>> 3517a8bdc7150c45f7133d6e7d0b0887608f8998
import { Container } from "./components/Grid";
import LoginForm from "./components/Signup-Login/login-form";
import Signup from "./components/Signup-Login/sign-up";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
<<<<<<< HEAD
=======
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/navbar/navbar";
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";
>>>>>>> 3517a8bdc7150c45f7133d6e7d0b0887608f8998

class App extends Component {
  state = {
    firstName: "",
    role: ""
  };

<<<<<<< HEAD
    render() {
        return (
             <Routes/>
            <Router>
                <Container>
                    <Nav />
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/sign-up" component={Signup} />
                    <Route exact path="/welcome" component={Welcome} />
                </Container>
            </Router>
        )
    }
=======
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
>>>>>>> 3517a8bdc7150c45f7133d6e7d0b0887608f8998
}

export default App;
