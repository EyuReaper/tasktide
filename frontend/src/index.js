import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client'
import App from './App';
import './index.css'; // If you have global styles

// Get the root DOM element
const rootElement = document.getElementById('root');
// integrate routes


// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
