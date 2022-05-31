import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css';

//metodo 
ReactDOM.createRoot(document.getElementById('root')!).render(
// (document.getElementById('root')! - seleciona qual elemento do html vai receber o conteudo da aplicacao react, ou seja executa o elemento <div id="root"></div>.
// dentro ele executa o elemento Render
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
