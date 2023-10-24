import React from 'react';
import './contato.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import email_icon from '../../assets/gmail.png';
import telephone_icon from '../../assets/icons8-telephone-481.png';

const Contato = () => {
  return (
    <div className='Contato'>
      <Header />
      <Navbar />
      <div className='Contato_main'>
        <div className='contato_whatsapp'>
          <img src={whatsapp_icon} />
          <p>(61) 9812-2697</p>
        </div>
        <div className='contato_instagram'>
          <img src={instagram_icon} />
          <p>@caliandra.escola</p>
        </div>
        <div className='contato_email'>
          <img src={email_icon} alt='imagem_email' />
          <p>caliandra.escola@gmail.com</p>
        </div>
        <div className='contato_telefone'>
          <img src={telephone_icon} alt='imagem_telefone' />
          <p>(61) 3034-2809</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
