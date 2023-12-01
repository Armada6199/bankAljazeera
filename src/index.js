import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LoginProvider from './hooks/LoginProvider';
import { ThemeProvider,createTheme } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme=createTheme({
  palette:{
    primary:{
    main:'#0E416B'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'BlinkMacSystemFont',
      '-apple-system',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
root.render(
  <React.StrictMode>
    <LoginProvider>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <App /> 
        </ThemeProvider>
        </BrowserRouter>
        </LoginProvider>
  </React.StrictMode>
);
