import React from 'react';
import './nossas-turmas.css';
import { Header, Footer } from '../../containers';
import { Navbar, Classes } from '../../components';

const NossasTurmas = () => {
  return (
    <div className='NossasTurmas'>
      <Header />
      <Navbar />
      <div className='NossasTurmas_main'>
        <h1>Nossas Turmas</h1>
        <p>
          Nossas salas possuem mobília de madeira feita sob medida para atender
          às necessidades de cada fase do desenvolvimento da criança e criar um
          ambiente belo e aconchegante. As salas possuem um piso de madeira
          flutuante, que traz uma sensação térmica mais agradável e macia.
        </p>
        <br />
        <p>
          Além das salas de referência de cada turma, temos um ateliê onde
          oferecemos atividades de artes em inglês e aulas de musicalização.
          Temos um amplo pátio com uma estrurura de parquinho Pikleriano e um
          mural sensorial interativo. Contamos também com um Parque de Areia,
          uma área externa de Vida Prática com uma horta e uma linda
          Brinquedoteca.
        </p>
        <Classes />
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default NossasTurmas;
