import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TimeSheet from './components/timesheet/timesheet';
import MatProcure from './components/matprocure/matprocure';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/timesheet" component={ TimeSheet } />
            <Route exact path="/matprocure" component={ MatProcure} />
        </Switch>
    </BrowserRouter>
  )