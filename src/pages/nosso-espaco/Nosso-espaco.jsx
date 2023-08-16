import React from 'react';
import './nosso-espaco.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossoEspaco = () => {
  return (
    <div className='NossoEspaco'>
      <div className='NossoEspaco_bg'>
        <Navbar />
        <h1 className='NossoEspaco_h1'>Nosso Espaço</h1>
        <p className='NossoEspaco_p'>
          Começamos com uma sala de aula em um condomínio do Jardim Botânico,
          realizamos um trabalho lindo e cheio de carinho, e agora a nossa
          pequena Caliandra floresceu! Nos mudamos para um espaço maior, mas que
          ainda traz o aconchego que gostamos de ter para receber nossos alunos
          e a abundância da natureza para enriquecer os processos de
          aprendizado. Ainda vamos adicionar muitos detalhes ao nosso espaço,
          buscando oferecer o que há de mais inovador e belo para nossas
          crianças. Venha conhecer esse espaço maravilhoso e ver de perto esse
          trabalho tão diferenciado que estamos construindo aqui, na Avenida do
          Sol do Jardim Botânico.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NossoEspaco;
