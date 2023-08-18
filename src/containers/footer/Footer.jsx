import React from 'react';
import './footer.css';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';

const Footer = () => {
  return (
    <div className='caliandra__footer'>
      <a href='https://wa.me/5561991892606' target='blank'>
        <img
          className='caliandra__footer-whatsapp-icon'
          src={whatsapp_icon}
          alt='whatsapp icon'
        />
      </a>
      <a href='https://instagram.com/caliandra.escola' target='blank'>
        <img
          className='caliandra__footer-instagram-icon'
          src={instagram_icon}
          alt='instagram icon'
        />
      </a>
    </div>
  );
};

export default Footer;
