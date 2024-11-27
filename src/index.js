import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import { ThemeProvider } from './contexts/theme';

import './index.css'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
       <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
