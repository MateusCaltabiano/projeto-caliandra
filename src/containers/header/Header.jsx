import React from 'react';
import './header.css';
import logo from '../../assets/caliandra-logo.png';

const Header = () => {
  return (
    <div className='caliandra__header'>
      <div className='caliandra__header-elements'>
        <img className='caliandra__header-img' src={logo} alt="caliandra-logo" />
      </div>
    </div>
  )
};

export default Header;
