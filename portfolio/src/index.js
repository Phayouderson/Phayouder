import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CaseStudyPage from './CaseStudyPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/CaseStudyPage' element={<CaseStudyPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);