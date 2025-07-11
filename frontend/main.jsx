import React from 'react';  //import react library
import { StrictMode } from 'react'; //StrictMode seperately
import { createRoot } from 'react-dom/client';  // Imports the  `createRoot` method  for rendering app into the DOM.
import ReactDOM from 'react-dom/client';  //Imports the entire `react-dom/client` module under the name ReactDOM
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
