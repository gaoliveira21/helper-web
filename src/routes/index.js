import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Step1 from '../pages/SignUp/Step1';
import Step2 from '../pages/SignUp/Step2';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up/step1" component={Step1} />
        <Route exact path="/sign-up/step2" component={Step2} />
        <Route exact path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
