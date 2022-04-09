import React from 'react'
import { List, LogoDesktop, ModalMenu, Menu, Navigation } from './style'
import IconNav from '../../images/lista.png'
import logoS from '../../images/logoS.png'
import cancel from '../../images/cancel.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Nav = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (  
    <Navigation >
      <LogoDesktop>
        <img src={logoS} alt="logo" />
      </LogoDesktop>
      <Menu>
        <img
          onClick={handleOpen}
          src={IconNav} alt="das" />
      </Menu>
      <List>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </List>
      {
        isOpen && (
          <ModalMenu>
            <div>
              <img src={logoS} alt="" />
              <img 
                onClick={handleOpen}
                className='close' src={cancel} alt="" />
            </div>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
          </ModalMenu>
        )
      }
    </Navigation>
  )
};
