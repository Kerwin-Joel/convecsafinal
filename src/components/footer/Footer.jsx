import React from 'react'
import { ContainerFooter, Redes, LogoRigths } from './style';
import logoS from '../../images/logoS.png'
import face from '../../images/face.png'
import inst from '../../images/inst.png'
import tuit from '../../images/tuit.png'
import { Whats } from '../WhatssApp/Whats';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <h2>Menú</h2>
        <ul>
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
        </ul>
      </div>
      <div>
        <h2>Proyectos</h2>
        <ul>
          <li><a href="#">Proyecto 1</a></li>
          <li><a href="#">Proyecto 1</a></li>
          <li><a href="#">Proyecto 1</a></li>
          <li><a href="#">Proyecto 1</a></li>
          <li><a href="#">Proyecto 1</a></li>
        </ul>
      </div>
      <div>
        <h2>Contáctanos</h2>
        <p className='margen'>Direccion para agregar </p>
        <div>
          <div className='margen'>
            <span>Teléfono 1: </span>
            <span>numero</span>
          </div>
          <div className='margen'>
            <span>Teléfono 1: </span>
            <span>numero</span>
          </div>
          <div className='margen'>
            <span>Teléfono 1: </span>
            <span>numero</span>
          </div>
        </div>
        <span><a href="mailto:">Correo : correo@gmail.com</a></span>
      </div>
      <div>
        <LogoRigths>
          <img src={logoS} alt="" />
          <span>© 2022 All Rights Reserved. Privacy policy</span>
        </LogoRigths>
        <Redes>
          <li><a href=""><img src={face} alt="" /></a></li>
          <li><a href=""><img src={inst} alt="" /></a></li>
          <li><a href=""><img src={tuit} alt="" /></a></li>
        </Redes>
      </div>
      <Whats/>
    </ContainerFooter>
  )
}
