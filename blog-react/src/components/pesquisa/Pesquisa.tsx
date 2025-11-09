import Footer from '../footer'
import Header from '../header'
import CardPesquisa from './cardPesquisa'
import './Pesquisa.css'

function Pesquisa() {

    // simulação de 8 resultados
    const resultados = [
        {}, {}, {}, {}, {}, {}, {}, {} 
    ];

    return (
        <>
            <Header />
            <section className="resultados">
                <h2>Resultados para: {resultados.length}</h2>

                {resultados.map((_, index) => (
                    <CardPesquisa key={index} />
                ))}
            </section>

            <Footer />
        </>
    )
}

export default Pesquisa