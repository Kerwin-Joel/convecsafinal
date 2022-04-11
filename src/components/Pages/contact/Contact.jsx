import React from 'react'
import { Container, Content, Left, Rigth } from './styles';
import { BannerAux } from '../banneAux/BannerAux';

export const Contact = () => {
  return (
    <>
      <BannerAux/>
      <Container>
        <section>
          <h1>Contactanos</h1>
          <span></span>
        </section>
        <Content>
          <Left>
            <h2>Dirección :</h2>
            <p>8901 Marmora Road, Glasgow, D04 89GR.</p>
            <ul>
              <h2>Teléfonos :</h2>
              <li>+1 800 559 6580</li>
              <li>+1 959 603 6035</li>
              <li>+1 959 603 6035</li>
            </ul>
          </Left>
          <Rigth>
            <h2>Escríbenos</h2>
            <form action="">
              <section>
                <div>
                  <input type="text" />
                  <label>Nombre</label>
                </div>
                <div>
                  <input type="email" />
                  <label>Email</label>
                </div>
                <div>
                  <input type="phone" />
                  <label>Teléfono</label>
                </div>
              </section>
              <main>
                <textarea ></textarea>
                <label>Mensaje</label>
              </main>
              <button>Enviar</button> 
            </form>
          </Rigth>
        </Content>
      </Container>
    </>

  )
}
