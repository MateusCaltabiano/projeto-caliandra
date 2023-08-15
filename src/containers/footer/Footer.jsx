import React from 'react';
import './footer.css';
import logo from '../../assets/caliandra-logo.png'

const Footer = () => {
  return (
    <div className='caliandra__footer'>
      <div className='caliandra__footer-elements'>
        <img className='caliandra__footer-img' src={logo} href="caliandra-logo"/>
        <div>
          <p>Telefone: (61) 9 9189-2606</p>
          <p>Endereço: Avenida do Sol, em frente ao Ideal</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
