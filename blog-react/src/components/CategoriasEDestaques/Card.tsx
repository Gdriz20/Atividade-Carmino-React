import './Card.css'

function Card(prop: { titulo: string; subtitulo: string; semSubtitulo?: boolean }) {

    return (
        <>
                <div className="post-card-grande">
                    <div className="thumbnail maior"></div>
                    <h2>{prop.titulo}</h2>
                    {!prop.semSubtitulo && <p>{prop.subtitulo}</p>}
                </div>
        </>
    )
}

export default Card