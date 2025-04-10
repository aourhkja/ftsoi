// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import PookieScanner from './PookieScanner';
import './index.css'; // Optional if using Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PookieScanner />
  </React.StrictMode>
);
