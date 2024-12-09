import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App'
import { ThemeProvider } from './contexts/theme'

import './index.css'

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
])

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)