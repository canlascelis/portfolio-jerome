import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);