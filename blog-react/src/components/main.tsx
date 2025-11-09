import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './footer.css'
import Cadastro from './cadastro/Cadastro.tsx'
import AssNews from './newsletter/AssNews.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AssNews />
  </StrictMode>,
)
