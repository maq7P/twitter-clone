import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
          <Router>
              <Provider store={store}>
                  <App />
              </Provider>
          </Router>
      </ThemeProvider>
  </>,
  document.getElementById('root')
);
