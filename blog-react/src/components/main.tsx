import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './footer.css'
import Cadastro from './cadastro/Cadastro.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
