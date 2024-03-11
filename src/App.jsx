
import Home from './components/Home'
import DatosPersonales from './components/DatosPersonales'
import './App.css'
import Conocimiento from './components/Conocimiento'
import ExperienciaLaboral from './components/ExperienciaLaboral'
import Fichas from './components/Fichas'
import FichasLink from './components/fichasLink'
import React, {useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  const conocimientoRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/conocimiento') {
      // Desplazar al componente Conocimiento al cargar la página
      conocimientoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
      <div className="App">
    <div className="container">
    <Home/>
    <DatosPersonales/>
    <Conocimiento/>
    <ExperienciaLaboral/>
    </div>
    </div>
  )
}

export default App
