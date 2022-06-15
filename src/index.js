import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ScopedCssBaseline } from '@mui/material';
import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <App />
        </ScopedCssBaseline>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
