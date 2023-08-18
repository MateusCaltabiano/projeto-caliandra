import React from 'react';
import './quem-somos.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const QuemSomos = () => {
  return (
    <div className='QuemSomos'>
      <Header />
      <Navbar />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default QuemSomos;
