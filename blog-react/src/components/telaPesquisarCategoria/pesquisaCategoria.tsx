
import '../telaPesquisarCategoria/pesquisaCategoria.css'
import Menu from './Menu.tsx'
import Estatitisca from './Estatitisca.tsx'
import CriarPost from './criarPost.tsx'



function PesquisaCategoria() {
    return (
        <>
        <div className='container'>
            <Menu />
            <main className='content'>
                <div className="cards">
                    <Estatitisca />
                </div>
                <CriarPost />
            </main>
        </div>
        </>
    );
}
export default PesquisaCategoria;