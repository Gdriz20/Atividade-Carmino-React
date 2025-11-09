import React from "react";

const HighlightsSection: React.FC = () => {
  return (
    <section className="postagens-destaque">
      <div className="left">
        <h3>Postagens em Destaque</h3>

        <div className="card-post">
          <div className="thumb"></div>
          <div className="post-info">
            <p className="meta">31 Jul 2025 • Destaque</p>
            <h4>Erros de Design que Todos Devem Evitar</h4>
            <p className="tempo">3 min de leitura</p>
          </div>
        </div>

        <div className="card-post">
          <div className="thumb"></div>
          <div className="post-info">
            <p className="meta">31 Jul 2025 • Destaque</p>
            <h4>As Maiores Empresas por Receita</h4>
          </div>
        </div>
      </div>

      <div className="right">
        <h3>Escolhas do Editor</h3>
        <ul>
          <li>O uso negativo da internet</li>
          <li>O segredo do brainstorm</li>
          <li>Escalar para pequenos negócios</li>
          <li>O futuro do trabalho remoto</li>
        </ul>
      </div>
    </section>
  );
};

export default HighlightsSection;
