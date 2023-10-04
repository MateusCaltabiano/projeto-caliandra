import React from 'react';
import './quem-somos.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';
import cone_icon from '../../assets/cone.png';

const QuemSomos = () => {
  return (
    <div className='QuemSomos'>
      <Header />
      <Navbar />
      <div className='QuemSomos_main'>
        <img src={cone_icon}></img>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default QuemSomos;
