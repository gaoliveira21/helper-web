import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Route'

import SignIn from '../pages/SignIn'
import Step1 from '../pages/SignUp/Step1'
import Step2 from '../pages/SignUp/Step2'
import Step3 from '../pages/SignUp/Step3'
import Success from '../pages/SignUp/Success'
import Dashboard from '../pages/Dashboard'
import NewCase from '../pages/Cases/NewCase'
import Cases from '../pages/Cases'
import UpdateCase from '../pages/Cases/UpdateCase'
import DetailCase from '../pages/Cases/DetailCase'
import Profile from '../pages/Profile'
import UpdatePassword from '../pages/Profile/UpdatePassword'
import Donation from '../pages/Donation'
import Page404 from '../pages/Page404'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up/step1' component={Step1} />
        <Route exact path='/sign-up/step2' component={Step2} />
        <Route exact path='/sign-up/step3' component={Step3} />
        <Route exact path='/sign-up/success' component={Success} />
        <Route exact path='/dashboard' component={Dashboard} isPrivate />
        <Route exact path='/cases' component={Cases} isPrivate />
        <Route exact path='/cases/new-case' component={NewCase} isPrivate />
        <Route
          exact
          path='/cases/detail-case/:id'
          component={DetailCase}
          isPrivate
        />
        <Route
          exact
          path='/cases/update-case/:id'
          component={UpdateCase}
          isPrivate
        />
        <Route exact path='/profile' component={Profile} isPrivate />
        <Route exact path='/profile/update-password' component={UpdatePassword} isPrivate />
        <Route exact path='/donation' component={Donation} isPrivate />

        <Route path='*' exact component={Page404} is404 />
      </Switch>
    </BrowserRouter>
  )
}
