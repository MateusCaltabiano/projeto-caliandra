import React from 'react';
import './nosso-espaco.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';
import logo from '../../assets/caliandra-logo.png';

const NossoEspaco = () => {
  return (
    <div className='NossoEspaco'>
      <Header />
      <Navbar />
      <h1 className='NossoEspaco_h1'>Nosso Espaço</h1>
      <div className='NossoEspaco_main'>
        <p className='NossoEspaco_p'>
          Começamos com uma sala de aula em um condomínio do Jardim Botânico,
          realizamos um trabalho lindo e cheio de carinho, e agora a nossa
          pequena Caliandra floresceu! Nos mudamos para um espaço maior, mas que
          ainda traz o aconchego que gostamos de ter para receber nossos alunos
          e a abundância da natureza para enriquecer os processos de
          aprendizado.
        </p>
        <img src={logo} alt='foto1' />
        <img src={logo} alt='foto2' />
        <p className='NossoEspaco_p'>
          Ainda vamos adicionar muitos detalhes ao nosso espaço, buscando
          oferecer o que há de mais inovador e belo para nossas crianças. Venha
          conhecer esse espaço maravilhoso e ver de perto esse trabalho tão
          diferenciado que estamos construindo aqui, na Avenida do Sol do Jardim
          Botânico.
        </p>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossoEspaco;
