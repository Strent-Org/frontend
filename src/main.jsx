import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</RecoilRoot>
  </React.StrictMode>
)




