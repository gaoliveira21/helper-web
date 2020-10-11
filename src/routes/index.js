import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Step1 from '../pages/SignUp/Step1';
import Step2 from '../pages/SignUp/Step2';
import Step3 from '../pages/SignUp/Step3';
import Sucess from '../pages/SignUp/Sucess';
import Dashboard from '../pages/Dashboard';
import NewCase from '../pages/Cases/NewCase';
import Cases from '../pages/Cases';
import UpdateCase from '../pages/Cases/UpdateCase';
import DetailCase from '../pages/Cases/DetailCase';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up/step1" component={Step1} />
        <Route exact path="/sign-up/step2" component={Step2} />
        <Route exact path="/sign-up/step3" component={Step3} />
        <Route exact path="/sign-up/success" component={Sucess} />
        <Route exact path="/dashboard" component={Dashboard} isPrivate />
        <Route exact path="/cases" component={Cases} isPrivate />
        <Route exact path="/cases/new-case" component={NewCase} isPrivate />
        <Route
          exact
          path="/cases/detail-case"
          component={DetailCase}
          isPrivate
        />
        <Route
          exact
          path="/cases/update-case"
          component={UpdateCase}
          isPrivate
        />
        <Route exact path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
