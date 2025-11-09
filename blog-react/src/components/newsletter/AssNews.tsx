import Footer from '../footer'
import Header from '../header'
import './AssNews.css'

function AssNews() {
    return (
        <>
        <Header />
            <main className="newsContainer">

                <section className="cardNewsletter">
                    <h2>Assine a newsletter</h2>

                    <form className="formNewsletter">
                        <div className="inputLogin">
                            <input type="email" required placeholder="E-mail" />
                        </div>

                        <div className="confirmarNewsletter">
                            <div className="aceiteNewsletter">
                                <input type="checkbox" id="aceiteNews" name="termos" value="aceito" required />
                            </div>
                            <label className="labelAceiteNews" htmlFor="aceiteNews">Concordo em receber comunicações e li a política de privacidade</label>
                            <div className="submitNewsletter">
                                <button type="submit" className="btnEntrar">Cadastrar</button>
                            </div>
                        </div>

                    </form>
                </section>

            </main>
        <Footer />
        </>
    )
}

export default AssNews