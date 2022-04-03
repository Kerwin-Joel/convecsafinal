import React from 'react'
import { List, Logo, Navigation } from './style'


export const Nav = () => {
  return (
    <Navigation>
      <Logo>Convecsa</Logo>
      <List>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </List>
    </Navigation>
  )
}
