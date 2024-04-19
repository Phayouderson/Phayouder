import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; // Remove Routes and Route imports
import './index.css';
import App from './App';
import CaseStudyPage from './CaseStudyPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* Remove the Routes component */}
    <App />
    {/* Remove the Route component for CaseStudyPage */}
  </BrowserRouter>
);
