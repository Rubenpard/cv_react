import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import dataFicha from './data/datosFichas.js'
import Fichas from './components/Fichas.jsx'
import dataFichaTecnologia from './data/datosFichasTegnologias.js'
import dataFichaBibliotecas from './data/datosFichasBibliotecas.js'
import dataFichaEstrategia from './data/datosFichasEstrategias.js'

const routes = [
  {
    path: "/cvreact/",
    element: <App/>
  }
]

dataFicha.forEach((ficha) => 
  {routes.push({
    path: `/cvreact/${ficha.name}`,
    element: <Fichas ficha={ficha}/>
  })
})

dataFichaTecnologia.forEach((ficha) => 
  {routes.push({
    path: `/cvreact/${ficha.name}`,
    element: <Fichas ficha={ficha}/>
  })
})

dataFichaBibliotecas.forEach((ficha) => 
  {routes.push({
    path: `/cvreact/${ficha.name}`,
    element: <Fichas ficha={ficha}/>
  })
})

dataFichaEstrategia.forEach((ficha) => 
  {routes.push({
    path: `/cvreact/${ficha.name}`,
    element: <Fichas ficha={ficha}/>
  })
})

//TRABAJAR EN LOCAL

/*
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

dataFichaBibliotecas.forEach((ficha) => 
  {routes.push({
    path: ficha.name,
    element: <Fichas ficha={ficha}/>
  })
})

dataFichaEstrategia.forEach((ficha) => 
  {routes.push({
    path: ficha.name,
    element: <Fichas ficha={ficha}/>
  })
})

*/

const router = createBrowserRouter (routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
