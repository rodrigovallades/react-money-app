import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billing-cycle/billing-cycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard}></Route>
    <Route path='/billing-cycles' component={BillingCycle}></Route>
    <Redirect from='*' to='/'></Redirect>
  </Router>
)
