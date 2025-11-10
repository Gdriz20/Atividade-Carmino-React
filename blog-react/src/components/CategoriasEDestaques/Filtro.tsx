import './filtro.css';

function Filtro() {
    return (
        <>
            <h1 className="TituloGrande">Categoria: Techno</h1>
            <div>
                <ul className="filtro">
                    <li>
                        <button className="button-filtro">Popular</button>
                    </li>
                    <li>
                        <button className="button-filtro">Mais recentes</button>
                    </li>
                    <li>
                        <button className="button-filtro">IA</button>
                    </li>
                    <li>
                        <button className="button-filtro">Produtividade</button>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Filtro;