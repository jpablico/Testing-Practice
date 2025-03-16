import { createRoot } from 'react-dom/client';
import React from 'react';
import '../styles/index.css';


document.body.innerHTML = `<div id="app"> </div>`;

const root = createRoot(document.getElementById('app'));
root.render(
  <div>
    <h1>Welcome to the React App</h1>
    <p>This is a simple React application.</p>
  </div>
);