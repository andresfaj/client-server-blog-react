import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomeScreen from '../screens/home/Home';

const BlogRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Redirect to="/" />
    </Switch>
  );
};

export default BlogRouter;
