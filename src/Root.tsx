import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { me } from 'store/auth/action';
import { getAuthToken } from 'utils/auth';
import Header from 'components/Layout/Header';

// lazy-load
const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Auth/Login'));
const Join = lazy(() => import('pages/Auth/Join'));
const Places = lazy(() => import('pages/Places'));

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken()?.toString();
    dispatch(me(token));
  }, []);

  return (
    <Router>
      <Header />
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/places" component={Places} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Root;
