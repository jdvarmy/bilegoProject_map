import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import configureStore, { history } from './store/configureStore';
import theme from './utils/theme';

import './index.css';

const store = configureStore();

render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
