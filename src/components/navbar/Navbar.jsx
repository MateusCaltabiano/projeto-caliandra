import React from 'react';
import { RiMenu3Line, RiCLoseLin } from 'react-icons/ri';
import logo from '../../assets/caliandra-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
      <div className="caliandra__navbar">
        <div className="caliandra__navbar-links">
          <div className="caliandra__navbar-links_container">
            <p><a href="/">Home</a></p>
            <p><a href="QuemSomos">Quem somos</a></p>
            <p><a href="NossaProposta">Nossa Proposta</a></p>
            <p><a href="NossoEspaco">Nosso Espaço</a></p>
            <p><a href="Nossa Equipe">Nossa equipe</a></p>
            <p><a href="Contato">Contato</a></p>
            <p><a href="AgendeUmaVisita">Agende uma visita</a></p>
          </div>
        </div>
      </div>
  )
};

export default Navbar;
