import React from 'react';
import './contato.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const Contato = () => {
  return (
    <div className='Contato'>
      <Header />
      <Navbar />
      <div className='Contato_main'>
        <a className='contato_whatsapp'>WhatsApp</a>
        <a className='contato_instagram'>Instagram</a>
        <a className='contato_email'>Email</a>
        <a className='contato_telefone'>Telefone</a>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default Contato;
