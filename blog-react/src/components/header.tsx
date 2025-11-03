import './Header.css'

function Header() {

  return (
    <>
      <header>

        <section className="navLeft">

          <h1>HABIT</h1>
          <nav className="navbar">
            <ul className="menu">
              <li><a href="#">Início</a></li>
              <li><a href="#">Páginas</a></li>
              <li><a href="#">Destaques</a></li>
              <li><a href="#">Assinar</a></li>
              <li><a href="#">Admin</a></li>
            </ul>
          </nav>
        </section>

        <section className="navRight">
          <div className="search-area">
            <button id="btnSearch">Buscar</button>
            <button id="btnLogin" className="outline">Entrar</button>
          </div>
        </section>

      </header>
    </>
  )
}

export default Header
