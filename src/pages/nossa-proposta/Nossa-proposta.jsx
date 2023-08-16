import React from 'react';
import './nossa-proposta.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossaProposta = () => {
    return (
        <div className='NossaProposta'>
            <div className='NossaProposta_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default NossaProposta;