import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Research from './components/research.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Research/>
  </StrictMode>,
)
