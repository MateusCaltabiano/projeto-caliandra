import React from 'react';
import {  Footer, Header } from './containers';
import { Navbar } from './components';
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
