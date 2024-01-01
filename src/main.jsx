import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importando elementos do react-router-dom
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// Importando páginas (components)
import Homepage from "./routes/Homepage.jsx"
import NewPost from './routes/NewPost'

// Criando objeto de configuração de roteamento
const router = createBrowserRouter([
  {
    // Definindo o conteúdo/conteiner principal da aplicação -> <App/>
    element: <App/>,

    // Rotas
    children: [
      {
        path:"/",
        element: <Homepage />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
