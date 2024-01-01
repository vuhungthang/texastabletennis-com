import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App/App';

const rootElement = document.getElementById('root');

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <App />
);
