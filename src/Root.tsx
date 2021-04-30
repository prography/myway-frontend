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
const Detail = lazy(() => import('pages/Detail'));
const OrderForm = lazy(() => import('pages/OrderForm'));
const CartPage = lazy(() => import('pages/CartPage'));
const OrderComplete = lazy(() => import('pages/OrderComplete'));
const MyPage = lazy(() => import('pages/MyPage'));

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken()?.toString();
    if (token) dispatch(me(token));
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
          <Route exact path="/places/:id" component={Detail} />
          <Route exact path="/orderForm" component={OrderForm} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/orderComplete" component={OrderComplete} />
          <Route exact path="/MyPage" component={MyPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Root;
