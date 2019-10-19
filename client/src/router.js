import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TimeSheet from './components/timesheet/timesheet';
import Manager1 from './components/Manager1';
import Manager2 from './components/Manager2';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/timesheet" component={ TimeSheet } />
            <Route exact path="/manager1" component={ Manager1 } />
            <Route exact path="/manager2" component={ Manager2 } />
        </Switch>
    </BrowserRouter>
  )