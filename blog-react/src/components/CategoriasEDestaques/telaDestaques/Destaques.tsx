import '../telaDestaques/Destaques.css'
import Card from '../Card.tsx'



function Destaque() {
  return (
    <>
    <main>
      
      <h1 className='TituloGrande'>Destaques</h1>
      <div className="posts-grande">
        <Card titulo="Post Title 1" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 2" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 3" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 4" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 5" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 6" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 7" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 8" subtitulo="Short description of the post."  semSubtitulo={true}/>
        <Card titulo="Post Title 9" subtitulo="Short description of the post."  semSubtitulo={true}/>
      </div>
    </main>
    </>
    
  );
}
export default Destaque;

