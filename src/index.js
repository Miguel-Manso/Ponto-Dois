import React from 'react';
import ReactDOM from 'react-dom/client';
import Tela from './views/Tela';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComp />
    <Tela />
  </React.StrictMode>
);
