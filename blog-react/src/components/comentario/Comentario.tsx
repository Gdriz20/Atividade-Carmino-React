import React from 'react';
import './Comentario.css'; 

const CommentsQueue: React.FC = () => {
  const comments = [
    {
      id: 1,
      author: 'Autor #1',
      text: 'Este é um comentário pendente de aprovação. O conteúdo do comentário está aqui para ser revisado.',
      postTitle: 'Título do Post 1'
    },
    {
      id: 2,
      author: 'Autor #2',
      text: 'Outro comentário aguardando na fila. O administrador precisa aprovar ou rejeitar este comentário.',
      postTitle: 'Título do Post 2'
    },
  ];

  return (
    
      <section className="content-box">
        <h3>Fila de Comentários</h3>
        <p>Comentários pendentes de aprovação.</p>

        <div className="comments-list">
          {comments.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <div className="comment-header">
                <strong>{comment.author}</strong>
                <span className="comment-post-link">
                  em <a href="#">{comment.postTitle}</a>
                </span>
              </div>
              <p className="comment-body">{comment.text}</p>
              <div className="comment-actions">
                <button className="btn btn-primary">Aprovar</button>
                <button className="btn btn-outline btn-red">Rejeitar</button>
                <button className="btn btn-secondary">Spam</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    
  );
};

export default CommentsQueue;