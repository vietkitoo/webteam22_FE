import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import Home from './page/home/home';
import Login from './page/login/login';
import reportWebVitals from './reportWebVitals';
import Regishotel from './page/register-hotel/regishotel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path="/register-hotel" element = {<Regishotel />} />
  </Routes>
</Router>
);

