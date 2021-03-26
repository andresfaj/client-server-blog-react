import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NavBar from '../components/Blog/NavBar';
import HomeScreen from '../screens/Blog/home/HomeScreen';

const BlogRouter = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default BlogRouter;
