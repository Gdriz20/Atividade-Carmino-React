import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './footer.css'
import Pesquisa from './pesquisa/pesquisa.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pesquisa />
  </StrictMode>,
)
