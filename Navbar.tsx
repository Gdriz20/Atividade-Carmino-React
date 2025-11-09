import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <h1>HABIT</h1>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Páginas</a></li>
            <li><a href="#">Destaques</a></li>
            <li><a href="#">Assinar</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
        </nav>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Buscar..." />
        <button className="btn-outline">Buscar</button>
        <button className="btn-outline">Entrar</button>
      </div>
    </header>
  );
};

export default Navbar;

