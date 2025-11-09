import './criarPost.css'

function criarPost() {
    return (
        <>
            <section className="create-post-categoria">
                <h2 className="titulo-categorias">Categorias</h2>
                <div className="categoria-conjunto">
                    <input type="text" className="input-title" placeholder="Título"/>
                        <h2>Categorias</h2>
                        <div className="elemento-categoria">
                            <div className="input-group-categoria">
                                <h2>Categoria #1</h2>
                            </div>

                            <div className="action-buttons-categoria">
                                <button className="btn-outline">Salvar rascunho</button>
                                <button className="btn-outline">Enviar para revisão</button>
                            </div>
                        </div>

                        <div className="elemento-categoria">
                            <div className="input-group-categoria">
                                <h2>Categoria #2</h2>
                            </div>

                            <div className="action-buttons-categoria">
                                <button className="btn-outline">Salvar rascunho</button>
                                <button className="btn-outline">Enviar para revisão</button>
                            </div>

                        </div>
                </div>
            </section>
        </>
    )
}
export default criarPost;