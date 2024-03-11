import botones from "../data/cv"

function Home({titulo="curriculum", nombre="Rubén A. Martínez"}) {

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
        return <li key={boton}> <a href={b.href} onClick={(event) => handleClick(event, b.href)}><button className="button">{b.texto}</button></a></li>
    })

  return (
    <div className="main" id="menu">
    <div className="titulo">
        <h1>{titulo}</h1>
        <h2>{nombre}</h2>
        
        <ul className="nav">
        {botonesLink}
        </ul>
    </div>
    </div>
  )
}

export default Home