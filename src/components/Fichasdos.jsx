import React from 'react'

function Fichasdos({datos}) {
  return (
    <div className="card">
    <h1>{datos.name}</h1>
    <h2>{datos.descripcion}</h2>
</div>
  )
}

export default Fichasdos