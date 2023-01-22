import React from 'react';
import ReactDOM from 'react-dom/client';
import './GlobalStyles.js';
import App from './App.jsx';
import { GlobalStyles } from './GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);