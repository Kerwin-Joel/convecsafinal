import React from 'react'
import { List, LogoDesktop, ModalMenu, Menu, Navigation } from './style'
import IconNav from '../../images/lista.png'
import logoS from '../../images/logoS.png'

export const Nav = () => {
  return (  
    <Navigation>
      <LogoDesktop>
        <img src={logoS} alt="logo" />
      </LogoDesktop>
      <Menu>
        <img src={IconNav} alt="das" />
      </Menu>
      <List>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </List>
      <ModalMenu>
        <div>
          <img src={logoS} alt="" />
        </div>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ModalMenu>
    </Navigation>
  )
}
