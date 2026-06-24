import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { TemaProvider } from './context/TemaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>   {/* hace que salgan dos msg iguales en console */}
    <BrowserRouter>
        <TemaProvider>
          <App />
        </TemaProvider>
    </BrowserRouter>
  </StrictMode>
)