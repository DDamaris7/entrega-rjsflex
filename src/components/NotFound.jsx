import React from "react"
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to= "/">Volver a inicio</Link>
    </div>
  )
}

export default NotFound