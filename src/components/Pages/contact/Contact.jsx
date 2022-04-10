import React from 'react'
import { Container, Content, Left, Rigth } from './styles';

export const Contact = () => {
  return (
    <Container>
      <h1>Contactanos</h1>
      <Content>
        <Left>
          <h2>Direccion</h2>
          <p>8901 Marmora Road, Glasgow, D04 89GR.</p>
          <ul>
            <h2>Telephones:</h2>
            <li>+1 800 559 6580</li>
            <li>+1 959 603 6035</li>
            <li>+1 959 603 6035</li>
          </ul>
        </Left>
        <Rigth>
          <h2>Escribenos</h2>
          <form action="">
            <section>
              <div>
                <label>Nombre</label>
                <input type="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" />
              </div>
              <div>
                <label>Telefono</label>
                <input type="phone" />
              </div>
            </section>
            <main>
              <label>Mensaje</label>
              <textarea ></textarea>
            </main>
            <button>Enviar</button> 
          </form>
        </Rigth>
      </Content>
    </Container>
  )
}
