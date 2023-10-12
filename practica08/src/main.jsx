import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx' */
import './index.css'
import MiFieldSet from './MiFieldSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  <App /> */}
    <MiFieldSet titulo="Datos personales" txt1="Nombre" txt2="Apellidos"/>
    <MiFieldSet titulo="Datos de la cuenta" txt1="Usuario" txt2="Contraseña"/>
  </React.StrictMode>,
)
