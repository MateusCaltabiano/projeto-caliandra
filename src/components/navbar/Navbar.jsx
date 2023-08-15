import React from 'react';
import { RiMenu3Line, RiCLoseLin } from 'react-icons/ri';
import logo from '../../assets/caliandra-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="caliandra__navbar">
      <div className="caliandra__navbar-links">
        <div className="caliandra__navbar-links_container">
          <p><a href="home">Home</a></p>
          <p><a href="quem-somos">Quem somos</a></p>
          <p><a href="contatos">Programas</a></p>
          <p><a href="localizacao">Localização</a></p>
          <p><a href="nossa-equipe">Nossa equipe</a></p>
          <p><a href="agende-uma-visita">Agende uma visita</a></p>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
