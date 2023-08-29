import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuemSomos from './pages/quem-somos/Quem-somos';
import Contato from './pages/contato/Contato';
import NossaProposta from './pages/nossa-proposta/Nossa-proposta';
import NossoEspaco from './pages/nosso-espaco/Nosso-espaco';
import NossaEquipe from './pages/nossa-equipe/Nossa-equipe';
import AgendeUmaVisita from './pages/agende-uma-visita/Agende-uma-visita';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/projeto-caliandra' element={<App />} />
      <Route path='/projeto-caliandra/QuemSomos' element={<QuemSomos />} />
      <Route path='/projeto-caliandra/Contato' element={<Contato />} />
      <Route
        path='/projeto-caliandra/NossaProposta'
        element={<NossaProposta />}
      />
      <Route path='/projeto-caliandra/NossoEspaco' element={<NossoEspaco />} />
      <Route path='/projeto-caliandra/NossaEquipe' element={<NossaEquipe />} />
      <Route
        path='/projeto-caliandra/AgendeUmaVisita'
        element={<AgendeUmaVisita />}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
