import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import App from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
