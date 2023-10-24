import React from 'react';
import './nossas-turmas.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossasTurmas = () => {
  return (
    <div className='NossasTurmas'>
      <Header />
      <Navbar />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossasTurmas;
