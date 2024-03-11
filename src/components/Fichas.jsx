import { Link, useNavigate } from 'react-router-dom';

function Fichas({ficha}) {

    const navigate = useNavigate();
    
    return (
      <div className="mainFicha">
          <div className="headerFichas">
          <h1>{ficha.name}</h1>
           <a className="botonFichas"  onClick={() => navigate(-1)}>X</a>
          </div>
          <div className="gridFichas gap50 azul">
              <div><p>{ficha.texto}</p></div>
              <div className="borderLeft overflow">
              <div>
                  <h3 className="azul">{ficha.titulo1}</h3>
                  <p><pre>{ficha.contenido1}</pre></p>
                  </div>
                  <div>
                  <h3 className="azul">{ficha.titulo2}</h3>
                  <pre>{ficha.contenido2}</pre>
                  </div>
                  
              
              </div>
          
          </div>
      </div>
    )
  }
  
  export default Fichas