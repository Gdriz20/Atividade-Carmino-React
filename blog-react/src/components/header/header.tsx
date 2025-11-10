import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      <header>

        <section className="navLeft">

          <h1>HABIT</h1>
          <nav className="navbar">
            <ul className="menu">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/">Páginas</Link></li>
              <li><Link to="/">Destaques</Link></li>
              <li><Link to="/newsletter">Assinar</Link></li>
              <li><Link to="/">Admin</Link></li>
            </ul>
          </nav>
        </section>

        <section className="navRight">
          <div className="search-area">
            <input type="search" />
            <Link to="/pesquisa"><button id="btnSearch">Buscar</button></Link>
            <Link to="/"><button id="btnLogin" className="outline">Entrar</button></Link>
          </div>
        </section>

      </header>
    </>
  )
}

export default Header
