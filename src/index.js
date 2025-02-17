import React from 'react';
import ReactDOM from 'react-dom/client';  // Importação da API 'createRoot'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals