import React from 'react';
import './agende-uma-visita.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const AgendeUmaVisita = () => {
    return (
        <div className='AgendeUmaVisita'>
            <div className='AgendeUmaVisita_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default AgendeUmaVisita;