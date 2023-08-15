import React from 'react';
import './header.css';
import logo from '../../assets/caliandra-logo.png';

const Header = () => {
  return (
    <div className='caliandra__header-background'>
      <img className='caliandra__header-img' src={logo} alt="caliandra-logo" />
    </div>
  )
};

export default Header;
