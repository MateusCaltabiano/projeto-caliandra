import React from 'react';
import './nossa-equipe.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossaEquipe = () => {
  return (
    <div className='NossaEquipe'>
      <Header />
      <Navbar />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossaEquipe;
