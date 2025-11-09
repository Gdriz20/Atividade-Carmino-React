import './menu.css'

function Menu(){
    return(
        <>
        <aside className="sidebar">
            <h3>Menu</h3>
            <ul>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Criar Post</a></li>
                <li><a href="#">Escolhas do Editor</a></li>
                <li><a href="#">Usuários</a></li>
                <li><a href="#">Fila de revisão</a></li>
                <li><a href="#">Fila de comentários</a></li>
            </ul>
        </aside>
        </>
    )
}
export default Menu;