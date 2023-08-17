import React from 'react';
import './nossa-proposta.css';
import { Header, Footer } from '../../containers';
import { Navbar, DropdownText, Accordion } from '../../components';

const NossaProposta = () => {
  return (
    <div className='NossaProposta'>
      <Header />
      <Navbar />
      <h1 className='NossaProposta_h1'>Nossa Proposta</h1>
      <Accordion />
    </div>
  );
};

export default NossaProposta;
