import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './footer.css'
import Footer from './footer.tsx'
import Header from './header.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
)
