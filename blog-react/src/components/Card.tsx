import './Card.css'

function Card(prop: { titulo: string; subtitulo: string }) {

    return (
        <>
                <div className="post-card-grande">
                    <div className="thumbnail maior"></div>
                    <h2>{prop.titulo}</h2>
                    <p>{prop.subtitulo}</p>
                </div>
        </>
    )
}

export default Card