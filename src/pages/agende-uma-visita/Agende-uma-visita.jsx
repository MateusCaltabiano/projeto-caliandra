import React from 'react';
import './agende-uma-visita.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const AgendeUmaVisita = () => {
  return (
    <div className='AgendeUmaVisita'>
      <Header />
      <Navbar />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default AgendeUmaVisita;
