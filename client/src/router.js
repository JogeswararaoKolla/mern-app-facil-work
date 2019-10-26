import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TimeSheet from './components/timesheet/timesheet';
import MatProcure from './components/matprocure/matprocure';
import Manager1 from './components/Manager1/index.js';
import Manager2 from './components/Manager2/index.js';
import Welcome from './components/Welcome/index';
import Signup from './components/Signup-Login/sign-up';
import LoginForm from './components/Signup-Login/login-form';
import TimeSheetForm from './components/timesheet-form/timesheet-form';
import MatProcurmentForm from './components/matprocurment-form/matprocurment-form';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/timesheet" component={ TimeSheet } />
            <Route exact path="/matprocure" component={ MatProcure} />
            <Route exact path="/manager1" component={ Manager1 } />
            <Route exact path="/manager2" component={ Manager2 } />
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/welcome" component={ Welcome } />
            <Route exact path="/add-timesheet" component={ TimeSheetForm } />
            <Route exact path="/add-material" component={ MatProcurmentForm} />
            <Route exact path="/manager-input" component={ManagerInputForm} />
        </Switch>
    </BrowserRouter>
  )