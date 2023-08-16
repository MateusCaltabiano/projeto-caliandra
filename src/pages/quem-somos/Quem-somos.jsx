import React from 'react';
import './quem-somos.css';
import { Header, Footer } from '../../containers';
import { Navbar } from '../../components';

const QuemSomos = () => {
    return (
        <div className='QuemSomos'>
            <div className='QuemSomos_bg'>
                <Header />
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default QuemSomos;