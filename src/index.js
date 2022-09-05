import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Reacts strict mode renders components twice when developing to display warnings */
/* It doesn't do that in that built app */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);