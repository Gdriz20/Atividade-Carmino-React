import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">HABIT</h1>
        <nav className="nav-links">
          <a href="#">Início</a>
          <a href="#">Páginas</a>
          <a href="#">Destaques</a>
          <a href="#">Assinar</a>
          <a href="#">Admin</a>
        </nav>
        <div className="search-area">
          <input type="text" placeholder="Buscar..." />
          <button>Buscar</button>
          <button className="btn-login">Entrar</button>
        </div>
      </header>

      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Menu</h3>
          <ul>
            <li>Categorias</li>
            <li>Criar Post</li>
            <li>Escolhas do Editor</li>
            <li>Usuários</li>
            <li>Fila de revisão</li>
            <li>Fila de comentários</li>
          </ul>
        </aside>

        {/* Conteúdo principal */}
        <section className="content">
          {/* Estatísticas */}
          <div className="stats">
            <div className="card"><h4>Posts</h4><p>128</p></div>
            <div className="card"><h4>Visualizações</h4><p>54k</p></div>
            <div className="card"><h4>Inscritos</h4><p>12k</p></div>
            <div className="card"><h4>Pendências</h4><p>7</p></div>
          </div>

          {/* Criar Post */}
          <div className="create-post">
            <h3>Criar Post</h3>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Escreva aqui... (Editor simulador)" rows="5" />
            <div className="inputs-inline">
              <input type="text" placeholder="Categorias e tags" />
              <input type="text" placeholder="Upload da imagem de capa" />
            </div>
            <div className="buttons">
              <button className="btn">Salvar rascunho</button>
              <button className="btn">Enviar para revisão</button>
              <button className="btn-primary">Publicar (admin)</button>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <button>Instagram</button>
        <button>Work</button>
        <button>Bags</button>
        <button>Lamp</button>
        <button>Books</button>
      </footer>
    </div>
  );
}
