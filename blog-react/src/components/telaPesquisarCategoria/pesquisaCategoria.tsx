import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../telaPesquisarCategoria/pesquisaCategoria.css'
import Footer from '../footer.tsx'
import Header from '../header.tsx'
import Menu from '../menu.tsx'
import Estatitisca from '../Estatitisca.tsx'
import CriarPost from '../criarPost.tsx'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />
        <div className='container'>
            <Menu />
            <main className='content'>
                <div className="cards">
                    <Estatitisca />
                </div>
                <CriarPost />
            </main>
        </div>
        <Footer />
    </StrictMode>,
)