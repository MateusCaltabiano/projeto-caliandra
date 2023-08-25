import React from 'react';
import './nossa-equipe.css';
import { Header, Footer } from '../../containers';
import { Navbar, StaffGrid } from '../../components';

const NossaEquipe = () => {
  return (
    <div className='NossaEquipe'>
      <Header />
      <Navbar />
      <h1>Nossa Equipe</h1>
      <StaffGrid />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossaEquipe;
