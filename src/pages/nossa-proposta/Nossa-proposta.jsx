import React from 'react';
import './nossa-proposta.css';
import { Header, Footer } from '../../containers';
import { Navbar, DropdownText } from '../../components';

const NossaEquipe = () => {
  return (
    <div className='NossaEquipe'>
      <Header />
      <Navbar />
      <h1 className='NossaProposta_h1'>Nossa Proposta</h1>
      <DropdownText />
    </div>
  );
};

export default NossaEquipe;
