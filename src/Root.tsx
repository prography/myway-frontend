import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// lazy-load
const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Auth/Login'));
const Join = lazy(() => import('pages/Auth/Join'));

const Root = () => (
  <Router>
    <Suspense fallback="loading...">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
