import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../telaPesquisarCategoria/pesquisaCategoria.css'
import Menu from '../Menu.tsx'
import Estatitisca from '../Estatitisca.tsx'
import CriarPost from '../criarPost.tsx'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='container'>
            <Menu />
            <main className='content'>
                <div className="cards">
                    <Estatitisca />
                </div>
                <CriarPost />
            </main>
        </div>
    </StrictMode>,
)