import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScreen} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
