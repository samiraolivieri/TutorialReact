import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Header} from "./componentes/Header/Header.jsx"
import { Sobre } from "./componentes/Sobre/Sobre.jsx"
import { Contato } from "./componentes/Contato/Contato.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
        <App />
        <Sobre categoria="sobreMim"/>
        <Contato categoria="contato"/>
  </React.StrictMode>,
)
