import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App';
import configureStore, { history } from './store/configureStore';

import './index.css';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
