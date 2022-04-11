import React from 'react'

export const Whats = () => {
  return (
    <>
      <div className="phone-call cbh-phone cbh-green cbh-show  cbh-static"
          id="clbh_phone_div">
        <a id="WhatsApp-button"
          href="https://api.whatsapp.com/send?phone=91 7016361270&text=hola desde kido"
          target="_blank" 
          className="phoneJs" 
          title="WhatsApp 360imagem">
          <div className="cbh-ph-circle"></div>
          <div className="cbh-ph-circle-fill"></div>
          <div className="cbh-ph-img-circle1"></div>
        </a>
      </div>
    </>
  )
}
