import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';  // You can add global styles here if needed

// This is the root of the React application where the App component is rendered into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
