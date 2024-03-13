
import Home from './components/Home'
import DatosPersonales from './components/DatosPersonales'
import './App.css'
import Conocimiento from './components/Conocimiento'
import ExperienciaLaboral from './components/ExperienciaLaboral'


function App() {

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
