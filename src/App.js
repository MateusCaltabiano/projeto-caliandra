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
        <h1 className='home-page_h1'>Site ainda em construção!</h1>
        <p>
          Enretanto, já possuimos alguns conteúdos sobre nossa escola! Basta
          utilizar a barra de navegação acima para acessar as páginas que já
          estão prontas. Também é possível utilizar os botões abaixo para
          acessar nosso Instagram, iniciar uma conversa pelo WhatsApp ou enviar
          um email.
        </p>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
