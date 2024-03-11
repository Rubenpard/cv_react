import React, { useState } from 'react';
import experienciaLaboral from '../data/experienciaLaboral';
import BotonVolver from './BotonVolver';

function ExperienciaLaboral() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="Experiencia" className="main">
      <div className="cajaTexto">
        <h1>Experiencia Laboral</h1>
        <div className="accordion">
          <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => handleClick(0)}>
            <h3>MAQUETADOR WEB - FRONT END <span className="azul">Alma Technologies 2019 - 2023</span></h3>
            </div>
            <div className="accordion-content">
            {experienciaLaboral.map((datos, index) => (
          <div className="grid3divs gap30" key={index}>
            <div id="div1"><p>{datos.texto1Alma}</p></div>
            <div id="div2"><p>{datos.texto2Alma}</p></div> 
            <div className="tecnologias">
            <h4>Tecnologías usadas:</h4>
            {datos.tecnologiaAlma}
           </div>
          </div>
        ))}
            </div>
          </div>
          <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => handleClick(1)}>
             <h3>MAQUETADOR WEB  <span className="azul">Telefónica S.A. 2011 - 2018</span></h3>
            </div>
            <div className="accordion-content">
            {experienciaLaboral.map((datos, index) => (
          <div className="grid3divs gap30" key={index}>
            <div id="div1"><p>{datos.texto1Telefonica}</p></div>
            <div id="div2"><p>{datos.texto2Telefonica}</p></div> 
            <div className="tecnologias">
            <h4>Tecnologías usadas:</h4>
            {datos.tecnologiaTelefonica}
           </div>
          </div>
        ))}
            </div>
          </div>
          <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => handleClick(2)}>
              <h3>MAQUETADOR EDITORIAL <span className="azul">Diario de Alcalá 2004 - 2010</span></h3>
            </div>
            <div className="accordion-content">
            {experienciaLaboral.map((datos, index) => (
          <div className="grid3divs gap30" key={index}>
            <div id="div1"><p>{datos.texto1Diario}</p></div>
            <div id="div2"><p>{datos.texto2Diario}</p></div> 
            <div className="tecnologias">
            <h4>Tecnologías usadas:</h4>
            {datos.tecnologiaDiario}
           </div>
          </div>
        ))}
        </div>
        <BotonVolver/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienciaLaboral;
