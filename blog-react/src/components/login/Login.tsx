
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    return (
        <>
            
            <main className="loginContainer">

                <section className="cardLogin">
                    <h2>Entrar</h2>

                    <form className="formLogin">
                        <div className="inputLogin">
                            <input type="email" required placeholder="E-mail" />
                            <input type="password" required placeholder="Senha" />
                        </div>

                        <div className="submitLogin">
                            <button type="submit" className="btnEntrar">Entrar</button>
                            <button type="button" className="outline">Entrar com Google</button>
                        </div>

                        <div className="ajudaLogin">
                            <Link to="/cadastro"> Esqueci a senha </Link> •
                            <Link to="/cadastro"> Criar conta </Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )

}

export default Login

