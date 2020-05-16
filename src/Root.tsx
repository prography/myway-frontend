import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { me } from 'store/auth/action';
import { getAuthToken } from 'utils/auth';
// lazy-load
const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Auth/Login'));
const Join = lazy(() => import('pages/Auth/Join'));

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken()?.toString();
    dispatch(me(token));
  }, []);

  return(
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
};

export default Root;
