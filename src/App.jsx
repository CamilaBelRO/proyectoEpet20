import { Formulario } from './assets/componentes/formulario'; 
import { Home } from './assets/componentes/Home';
import { useState } from 'react';
import './App.css'

function App() {
  const [user, setUser] =useState ([])
  return (
  <div className="App">
    <h1>Login</h1>
   <Formulario setUser= {setUser}
   />
   <Home/>
  </div>
  )
}

export default App
