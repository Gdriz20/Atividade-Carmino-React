import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login/Login.tsx'
import Cadastro from './cadastro/Cadastro.tsx'
import AssNews from './newsletter/AssNews.tsx'
import Pesquisa from './pesquisa/Pesquisa.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     
    children: 
    [
      {path: "/", element: <Login />}, 
      {path: "/cadastro", element: <Cadastro />},
      {path: "/newsletter", element: <AssNews />},
      {path: "/pesquisa", element: <Pesquisa />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
