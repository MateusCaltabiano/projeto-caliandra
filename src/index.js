import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import QuemSomos from './pages/quem-somos/quem-somos';

const rootElement = document.getElementById("root")
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="QuemSomos" element={<QuemSomos />}/>
        </Routes>
    </BrowserRouter>,
    rootElement
)