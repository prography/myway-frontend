import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// lazy-load
const MainPage = lazy(() => import('pages/MainPage'));

const Root = () => (
  <Router>
    <Suspense fallback="loading...">
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
