import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="footer">
    <div className="content columns">
      <div className="column is-vertical-center">
        <h3>Menú</h3>
        <ul>
          <li>
          <Link to="/servicios">
            Servicios
          </Link>
          </li>
          <li>
          <Link to="/">
            Blog
          </Link>
          </li>
          <li>
          <Link to="/about">
            Sobre mí
          </Link>
          </li>
        </ul>
      </div>
      <div className="column is-vertical-center">
        <h3>Contacto</h3>
        <ul>
          <li>Santiaga Fernández Villanueva</li>
          <li>Teléfono: 679 518 431</li>
          <li>Email: <a href="mailto:centro.ayuda.adolescente@gmail.com">centro.ayuda.adolescente@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
