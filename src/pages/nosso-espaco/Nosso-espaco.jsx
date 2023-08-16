import React from 'react';
import './nosso-espaco.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossoEspaco = () => {
    return (
        <div className='NossoEspaco'>
            <div className='NossoEspaco_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default NossoEspaco;