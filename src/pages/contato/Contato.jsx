import React from 'react';
import './contato.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const Contato = () => {
    return (
        <div className='Contato'>
            <div className='Contato_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default Contato;