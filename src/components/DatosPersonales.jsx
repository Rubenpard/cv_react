import datosPersonales from '../data/datosPersonales'
import BotonVolver from './BotonVolver'

function DatosPersonales() {


  return (
    <div id="DatosPersonales" className="main">
        <div className="cajaTexto">
        <h1>Datos Personales</h1>
        {datosPersonales.map((datos, index) => (
          <div className='datosPersonales' key={index}>
            <div className="boxText">
            <p>
             {datos.nombre}</p>
            <p>{datos.telefono}</p>
            <p>{datos.correo}</p>
            <p className="azul">{datos.descripcion}</p>
          </div>
          <div>

          <hr className="line" />
          <div className="grid3divs">
          <div><hr className="line rotate" /></div>
          <div className="foto"></div>
          <div><hr className="line rotate" /></div>
          </div>
          <hr className="line" />
          </div>
          </div>
        ))}
         <BotonVolver/>
        </div> 
        </div>
  )
}

export default DatosPersonales