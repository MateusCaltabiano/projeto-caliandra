import React from 'react';
import './contato.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const Contato = () => {
  return (
    <div className='Contato'>
      <Header />
      <Navbar />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default Contato;
