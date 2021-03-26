import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import BlogRouter from './BlogRouter';
import DashboardRouter from './DashboardRouter';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/dashboard" component={DashboardRouter} />
          <Route path="/" component={BlogRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
