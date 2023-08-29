import React from 'react';
import { RiMenu3Line, RiCLoseLin } from 'react-icons/ri';
import logo from '../../assets/caliandra-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='caliandra__navbar'>
      <div className='caliandra__navbar-links'>
        <div className='caliandra__navbar-links_container'>
          <p>
            <a href='/projeto-caliandra'>Home</a>
          </p>
          <p>
            <a href='/projeto-caliandra/QuemSomos'>Quem somos</a>
          </p>
          <p>
            <a href='/projeto-caliandra/NossaProposta'>Nossa Proposta</a>
          </p>
          <p>
            <a href='/projeto-caliandra/NossoEspaco'>Nosso Espaço</a>
          </p>
          <p>
            <a href='/projeto-caliandra/NossaEquipe'>Nossa equipe</a>
          </p>
          <p>
            <a href='/projeto-caliandra/Contato'>Contato</a>
          </p>
          <p>
            <a href='/projeto-caliandra/AgendeUmaVisita'>Agende uma visita</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
