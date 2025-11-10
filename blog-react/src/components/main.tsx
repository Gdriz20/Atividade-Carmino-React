import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login/Login.tsx'
import Cadastro from './cadastro/Cadastro.tsx'
import AssNews from './newsletter/AssNews.tsx'
import Pesquisa from './pesquisa/Pesquisa.tsx'
import Destaque from './CategoriasEDestaques/telaDestaques/Destaques.tsx'
import Categoria from './CategoriasEDestaques/telaCategoria/Categorias.tsx'
import PesquisaCategoria from './telaPesquisarCategoria/pesquisaCategoria.tsx'
import EditorPicks from './editor/Editor.tsx'
import NewPost from './post/Post.tsx'
import Dashboard from './usuario/Usuario.tsx'
import Header from './header/header.tsx'
import Footer from './footer/footer.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     
    children: 
    [
      {path: "/", element: <Login />}, 
      {path: "/cadastro", element: <Cadastro />},
      {path: "/newsletter", element: <AssNews />},
      {path: "/pesquisa", element: <Pesquisa />},
      {path: "/destaques", element: <Destaque />},
      {path: "/categorias", element: <Categoria />},
      {path: "/pesquisarCategoria", element: <PesquisaCategoria />},
      {path: "/editor", element: <EditorPicks />},
      {path: "/post", element: <NewPost/>},
      {path: "/", element: <Dashboard />}

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
