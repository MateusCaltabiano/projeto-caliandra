import React from 'react';
import './footer.css';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import gmail_icon from '../../assets/gmail.png';

const Footer = () => {
  return (
    <div className='caliandra__footer'>
      <a href='https://wa.me/556198122667' target='blank'>
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
      <a href='mailto:caliandra.escola@gmail.com' target='blank'>
        <img
          className='caliandra__footer-instagram-icon'
          src={gmail_icon}
          alt='gmail_icon'
        ></img>
      </a>
    </div>
  );
};

export default Footer;
