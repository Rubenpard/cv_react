
import dataFicha from '../data/datosFichas'
import dataFichaTecnologia from '../data/datosFichasTegnologias'
import dataFichaBibliotecas from '../data/datosFichasBibliotecas'
import dataFichaEstrategia from '../data/datosFichasEstrategias'
import BotonVolver from './BotonVolver'
import FichasLink from './fichasLink'

function Conocimiento() {

  const fichaList = dataFicha.map((d, index) => {
    return <FichasLink key={index} title={d.name}/>
  })

 const fichaListTecnologia = dataFichaTecnologia.map((d, index) => {
  return <FichasLink key={index} title={d.name}/>
})

const fichaListBiblioteca = dataFichaBibliotecas.map((d, index) => {
  return <FichasLink key={index} title={d.name}/>
})

const fichaListEstrategia = dataFichaEstrategia.map((d, index) => {
  return <FichasLink key={index} title={d.name}/>
})

  return (
    <div id="Conocimiento" className="main">
        <div className="cajaTexto">
        <h1>Conocimiento</h1>
          <div className="Cconocimientos">
            <div className="grid4divs gap30">
              <div>
                <h3>TECNOLOGÍAS WEB</h3>
                <hr/>
                <ul className="linksConocimiento">
                  {fichaList}
                </ul>
              </div>
              <div>
                <h3>SOFTWARE</h3>
                <hr/>
                <ul className="linksConocimiento">
                {fichaListTecnologia}
                </ul>
                <h3>BIBLIOTECAS</h3>
                <hr/>
                <ul className="linksConocimiento">
                {fichaListBiblioteca}
               
                </ul>
              </div>
              <div>
                <h3>Estrategias de Optimización</h3>
                <hr/>
                <ul className="linksConocimiento">
               {fichaListEstrategia}
                </ul>
              </div>
              <div>
                <h3>CMS</h3>
                <hr/>
                <ul>
                  <li>wordpress</li>
                  <li>drupal</li>
                  <li>sharepoint</li>
                  <li>elementor</li>
                </ul>
              </div>
          </div>
          <BotonVolver/>
          </div>

        </div>
        </div>
  )
}

export default Conocimiento