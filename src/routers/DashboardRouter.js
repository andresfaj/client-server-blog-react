import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import DashboardScreen from '../screens/dashboard/DashboardScreen';

const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardScreen} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default DashboardRouter;
