import React from 'react';
import './Layout.css'; 
import './NewPost.css'; 

const NewPost: React.FC = () => {
  return (
   
      <div className="new-post-container">
        <div className="editor-main">
          <h2>Criar novo post</h2>
          
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input type="text" id="title" placeholder="Digite o título" />
          </div>

          <div className="form-group">
            <label>Corpo do Post</label>
            {/* Um editor de texto rico (como TinyMCE ou Quill) iria aqui.
                Usando um textarea simples como placeholder. */}
            <textarea className="text-editor-placeholder" rows={15} placeholder="Comece a escrever seu post..."></textarea>
          </div>
        </div>

        <aside className="editor-sidebar">
          <div className="content-box">
            <h3>Publicar</h3>
            <button className="btn btn-secondary">Salvar Rascunho</button>
            <button className="btn btn-primary">Publicar</button>
          </div>

          <div className="content-box">
            <h3>Categorias</h3>
            <div className="categories-list">
              <label><input type="checkbox" /> Categoria 1</label>
              <label><input type="checkbox" /> Categoria 2</label>
              <label><input type="checkbox" /> Categoria 3</label>
              <label><input type="checkbox" /> Categoria 4</label>
            </div>
            <a href="#" className="add-new-category">+ Adicionar Nova Categoria</a>
          </div>

          <div className="content-box">
            <h3>Imagem Destacada</h3>
            <div className="featured-image-uploader">
              Clique para fazer upload ou arraste
            </div>
          </div>
        </aside>
      </div>
    // </Layout>
  );
};

export default NewPost;