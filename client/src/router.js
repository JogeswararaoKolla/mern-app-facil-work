import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TimeSheet from './components/timesheet/timesheet';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/timesheet" component={ TimeSheet } />
        </Switch>
    </BrowserRouter>
  )