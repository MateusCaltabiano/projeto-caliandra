import React from 'react';
import './agende-uma-visita.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const AgendeUmaVisita = () => {
  return (
    <div className='AgendeUmaVisita'>
      <Header />
      <Navbar />
      <div className='AgendeUmaVisita_mainContent'>
        <h1 className='AgendeUmaVisita_h1'>Agende uma visita</h1>
        <div className='tabela-visitas'>
          <table>
            <tr>
              <td></td>
              <td>Segunda-feira</td>
              <td>Terça-feira</td>
              <td>Quarta-feira</td>
              <td>Quinta-feira</td>
              <td>Sexta-feira</td>
            </tr>
            <tr>
              <td>Manhã</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Tarde</td>
              <td>15h às 17h</td>
              <td>15h às 17h</td>
              <td>15h às 17h</td>
              <td>15h às 17h</td>
              <td>15h às 17h</td>
            </tr>
          </table>
        </div>
        <p>*Verificar disponibilidade via WhatsApp</p>
      </div>

      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default AgendeUmaVisita;
