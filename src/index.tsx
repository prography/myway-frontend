import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styles/theme';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import createStore from './store/createStore';

import 'styles/fonts/fonts.css';
import 'styles/reset.css';
import 'styles/color.css';

// store 생성
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Root />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
