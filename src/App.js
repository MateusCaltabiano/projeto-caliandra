import React from 'react';
import { Footer, Header } from './containers';
import { Navbar } from './components';
import './App.css';
import cone_icon from './assets/cone.png';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <div className='home-page_main'>
        <img src={cone_icon} />
        <h1 className='home-page_h1'>Site em construção!</h1>
        <p>
          As páginas que já possuem conteúdo são: Nossa Proposta, Nosso Espaço e
          Agende Uma Visita. Elas podem ser acessadas a partir da barra de
          navegação no topo da página! Também é possível enviar uma mensagem por
          WhatsApp e acessar nosso Instagram a partir dos botões no fim da
          página.
        </p>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
