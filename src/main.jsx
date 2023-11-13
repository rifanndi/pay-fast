import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import Home from './pages/home';
import komponen1 from './components/komponen1';
import BarcodeScanner from './components/BarcodeScanner';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
