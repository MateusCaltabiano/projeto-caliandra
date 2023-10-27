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
              <td>
                *Entre em contato para
                <br />
                verificar disponibilidade!
              </td>
              <td>Manhã</td>
              <td>Tarde</td>
            </tr>
            <tr>
              <td>Segunda-feira</td>
              <td>--</td>
              <td>15h às 17h</td>
            </tr>
            <tr>
              <td>Terça-feira</td>
              <td>--</td>
              <td>15h às 17h</td>
            </tr>
            <tr>
              <td>Quarta-feira</td>
              <td>--</td>
              <td>15h às 17h</td>
            </tr>
            <tr>
              <td>Quinta-feira</td>
              <td>--</td>
              <td>15h às 17h</td>
            </tr>
            <tr>
              <td>Sexta-feira</td>
              <td>--</td>
              <td>15h às 17h</td>
            </tr>
          </table>
        </div>
        <p></p>
      </div>

      <Footer />
    </div>
  );
};

export default AgendeUmaVisita;
