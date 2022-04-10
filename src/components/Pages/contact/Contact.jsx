import React from 'react'

export const Contact = () => {
  return (
    <div>
      <h1>Contactanos</h1>
      <div>
        <div>
          <h2>Direccion</h2>
          <p>8901 Marmora Road, Glasgow, D04 89GR.</p>
          <ul>
            <h2>Telephones:</h2>
            <li>+1 800 559 6580</li>
            <li>+1 959 603 6035</li>
            <li>+1 959 603 6035</li>
          </ul>
        </div>
        <div>
          <h2>Escribenos</h2>
          <form action="">
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
            <div>
              <label>Mensaje</label>
              <textarea ></textarea>
            </div>
            <button>Enviar</button> 
          </form>
        </div>
      </div>
    </div>
  )
}