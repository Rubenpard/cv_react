import React from 'react'
import { Link } from 'react-router-dom'

function FichasLink({title="Estamos trabajando en ello"}) {
  return (
   
    <li><Link to={title}><p>{title}</p></Link></li>
    
  )
}

export default FichasLink