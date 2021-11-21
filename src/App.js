import './App.css';
import { useState } from 'react';
import SeuNome from './Components/SeuNome';
import Saudacao from './Components/Saudacao';



function App() {

  

const [nome, setNome] = useState()

  
  return (
    <div className={"App"}>
    <h1> State Lift</h1>
    <SeuNome setNome={setNome}/>
    {nome}
    <Saudacao nome={nome}/>
    
    </div>
    
      
         
    
  )
}

export default App;
