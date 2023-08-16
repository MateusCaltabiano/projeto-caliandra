import React from 'react';
import './nossa-equipe.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const NossaEquipe = () => {
    return (
        <div className='NossaEquipe'>
            <div className='NossaEquipe_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default NossaEquipe;