
function BotonVolver() {

  const handleClick = (event, href) => {
    event.preventDefault(); 

    const seccion = document.querySelector(href); 
    const offset = seccion.getBoundingClientRect().top; 

    window.scrollBy({
      top: offset,
      behavior: 'smooth' 
    });
  };

  const destino = '#menu';


  return (
    <a onClick={(event) => handleClick(event, destino)}>
    <button className="botonVolver">Volver al Menú</button>
  </a>     
  )
}

export default BotonVolver