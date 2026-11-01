import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Contact.css'
import './Footer.css'
import './Navbar.css'
import './Education.css'
import './Projects.css'
import './Skills.css'
import './About.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
