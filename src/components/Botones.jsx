
import botones from "../data/cv"

function Botones() {
    const handleClick = (event, href) => {
      event.preventDefault();
      const seccion = document.querySelector(href);
      const offset = seccion.getBoundingClientRect().top; 
  
      window.scrollBy({
        top: offset,
        behavior: 'smooth' 
      });
    };
  
    const botonesLink = botones.map((b, boton )=>{
        return <li key={boton}> <a href={b.href} onClick={(event) => handleClick(event, b.href)}><button className="button"><p>{b.texto}</p></button></a></li>
    })
  
    return (
     
       {botonesLink}
           
    )
  }
  
  export default Botones