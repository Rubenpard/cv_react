import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import dataFicha from './data/datosFichas.js'
import Fichas from './components/Fichas.jsx'
import Conocimiento from './components/Conocimiento.jsx'
import dataFichaTecnologia from './data/datosFichasTegnologias.js'

const routes = [
  {
    path: "/",
    element: <App/>
  }
]

dataFicha.forEach((ficha) => 
  {routes.push({
    path: ficha.name,
    element: <Fichas ficha={ficha}/>
  })
})

dataFichaTecnologia.forEach((ficha) => 
  {routes.push({
    path: ficha.name,
    element: <Fichas ficha={ficha}/>
  })
})

const router = createBrowserRouter (routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
