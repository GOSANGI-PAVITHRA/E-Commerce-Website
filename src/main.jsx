import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css' 
import Papp from './Front/Papp.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Papp /> 
  </StrictMode>,
)