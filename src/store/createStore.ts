import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import State from 'store';

const sagaMiddleware = createSagaMiddleware();
const cs = () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(State, composeEnhancers(middlewares));
  // TODO: API 생기면 데이터 가져오는 saga 등록해야함
  // sagaMiddleware.run(rootSaga);

  return store;
};

export default cs;
