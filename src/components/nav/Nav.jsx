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
    <>
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
            <Link to="about">Nostros</Link>
          </li>
          <li>
            <Link to="services">Servicios</Link>
          </li>
          <li>
            <Link to="projects">Proyectos</Link>
            </li>
          <li>
            <Link to="contact">Contacto</Link>
          </li>
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
              <li>
                <Link onClick={handleOpen}  to="/">Inicio</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="about">Nostros</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="services">Servicios</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="projects">Proyectos</Link>
                </li>
              <li>
                <Link onClick={handleOpen} to="contact">Contacto</Link>
              </li>
            </ModalMenu>
          )
        }
      </Navigation>
      <Navigation className='fakeMenu' >
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
            <Link to="about">Nostros</Link>
          </li>
          <li>
            <Link to="services">Servicios</Link>
          </li>
          <li>
            <Link to="projects">Proyectos</Link>
            </li>
          <li>
            <Link to="contact">Contacto</Link>
          </li>
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
              <li>
                <Link onClick={handleOpen}  to="/">Inicio</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="about">Nostros</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="services">Servicios</Link>
              </li>
              <li>
                <Link onClick={handleOpen} to="projects">Proyectos</Link>
                </li>
              <li>
                <Link onClick={handleOpen} to="contact">Contacto</Link>
              </li>
            </ModalMenu>
          )
        }
      </Navigation>
    </>

  )
};
