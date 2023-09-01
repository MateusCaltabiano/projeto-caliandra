import React from 'react';
import { RiMenu3Line, RiCLoseLin } from 'react-icons/ri';
import logo from '../../assets/caliandra-logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='caliandra__navbar'>
      <div className='caliandra__navbar-links'>
        <div className='caliandra__navbar-links_container'>
          <Link to='/'>Home</Link>
          <Link to='/QuemSomos'>Quem Somos</Link>
          <Link to='/NossaProposta'>Nossa Proposta</Link>
          <Link to='/NossoEspaco'>Nosso Espaço</Link>
          <Link to='/NossaEquipe'>Nossa Equipe</Link>
          <Link to='/Contato'>Contato</Link>
          <Link to='/AgendeUmaVisita'>Agende Uma Visita</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
