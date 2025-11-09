import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="intro">
      <div className="intro-text">
        <h2>Navegue por tópicos de interesse</h2>
        <p>
          Descubra conteúdos por categorias, posts em destaque e as escolhas do
          editor.
        </p>
        <div className="intro-buttons">
          <button className="btn-primary">Explorar categorias</button>
          <button className="btn-outline">Assine a newsletter</button>
        </div>
      </div>
      <div className="intro-img"></div>
    </section>
  );
};

export default IntroSection;
