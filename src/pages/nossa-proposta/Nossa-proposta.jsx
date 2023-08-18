import React from 'react';
import './nossa-proposta.css';
import { Header, Footer } from '../../containers';
import { Navbar, Accordion } from '../../components';

const NossaProposta = () => {
  return (
    <div className='NossaProposta'>
      <Header />
      <Navbar />
      <div className='NossaProposta_main'>
        <h1 className='NossaProposta_h1'>Nossa Proposta</h1>
        <Accordion />
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossaProposta;
