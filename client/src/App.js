import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Signin from "./components/Login/Signin.js";
import Signup from "./components/Login/Signup.js";
import Welcome from "./components/Welcome";
<<<<<<< HEAD
import TimeSheet from "./components/timesheet/timesheet.js";
import TimeSheetForm from "./components/timesheet-form/timesheet-form.js";
import ManagerInputForm from "./components/ManagerInput/index.js";
import MatProcurmentForm from "./components/matprocurment-form/matprocurment-form";
import Manager1 from "./components/Manager1/index";
import Manager2 from "./components/Manager2/index";
=======
>>>>>>> 964edc012d870fe054358bd97a64fd9bfe1a4de2

import ManagerContainer from "./components/ManagerContainer.js";
import ManagerAddProject from "./components/ManagerAddProject.js";
import ManagerAddWorker from "./components/ManagerAddWorker.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/welcome" component={Welcome} />
<<<<<<< HEAD
        <Route exact path="/manager-input" component={ManagerInputForm} />
        <Route exact path="/manager1" component={Manager1} />
        <Route exact path="/manager2" component={Manager2} />
=======
        <Route exact path="/managerprojects" component={ManagerContainer} />
        <Route exact path="/manageraddworker" component={ManagerAddWorker} />
        <Route exact path="/manageraddproject" component={ManagerAddProject} />
>>>>>>> 964edc012d870fe054358bd97a64fd9bfe1a4de2
      </Router>
    );
  }
}

export default App;
