import React from 'react';
import './footer.css';
import logo from '../../assets/caliandra-logo.png'

const Footer = () => {
  return (
    <div className='caliandra__footer'>
        <img className='caliandra__footer-img' src={logo} alt="caliandra-logo"/>
    </div>
  );
};

export default Footer;
