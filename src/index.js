import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LanChuotLenTop from './LanChuotLenTop';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter> 
    <LanChuotLenTop />
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
