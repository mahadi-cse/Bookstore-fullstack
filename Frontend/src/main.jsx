import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authprovider from './components/context/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
      <App />
    </Authprovider>
  </BrowserRouter>

)
