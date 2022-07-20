/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) */

import App from './App'
import './index.css'

import { createRoot } from 'react-dom/client'
const root = document.querySelector('#root')
createRoot(root).render(<App />)