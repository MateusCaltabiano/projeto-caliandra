import React from 'react';
import {  Blog, Features, Footer, Header, Possibility, WhatGPT3,} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="bg">
        <Header />
        <Navbar />
      </div>
      <Footer />
    </div>
  )
};

export default App;
