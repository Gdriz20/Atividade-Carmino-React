import React from 'react';
import './Layout.css'; 
import './EditorPicks.css'; 

const EditorPicks: React.FC = () => {
  const posts = [
    { id: '#1', title: 'Título do Post 1', category: 'Categoria', author: 'Autor' },
    { id: '#2', title: 'Título do Post 2', category: 'Categoria', author: 'Autor' },
    { id: '#4', title: 'Título do Post 4', category: 'Categoria', author: 'Autor' },
    { id: '#5', title: 'Título do Post 5', category: 'Categoria', author: 'Autor' },
  ];

  return (
   
      <section className="content-box">
        <h3>Escolhas do Editor</h3>
        <p>Arraste e solte os posts para reordenar.</p>

        <table className="posts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Categoria</th>
              <th>Autor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {

            }
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.author}</td>
                <td>
                  <button className="btn btn-outline btn-red">Remover</button>
                  {

                  }
                  <span className="drag-handle">☰</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span>Página 1 de 10</span>
          <div>
            <button className="btn btn-secondary" disabled>Anterior</button>
            <button className="btn btn-secondary">Próxima</button>
          </div>
        </div>
      </section>
    
  );
};

export default EditorPicks;