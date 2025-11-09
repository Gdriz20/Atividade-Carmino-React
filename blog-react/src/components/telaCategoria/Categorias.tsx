import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../telaCategoria/Categorias.css'
import Card from '../Card.tsx'
import Filtro from '../Filtro.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      
      <Filtro />
      <div className="posts-grande">
        <Card titulo="Post Title 1" subtitulo="Short description of the post." />
        <Card titulo="Post Title 2" subtitulo="Short description of the post." />
        <Card titulo="Post Title 3" subtitulo="Short description of the post." />
        <Card titulo="Post Title 4" subtitulo="Short description of the post." />
        <Card titulo="Post Title 5" subtitulo="Short description of the post." />
        <Card titulo="Post Title 6" subtitulo="Short description of the post." />
        <Card titulo="Post Title 7" subtitulo="Short description of the post." />
        <Card titulo="Post Title 8" subtitulo="Short description of the post." />
        <Card titulo="Post Title 9" subtitulo="Short description of the post." />
      </div>

    </main>
  </StrictMode>,
)
