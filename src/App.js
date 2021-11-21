import './App.css';
import Condicional from './Components/Condicional'
import Evento from './Components/Evento';
import Form from './Components/Form';







function App() {

  
  return (
    <div className={"App"}>
    <h1> Renderização Condicional</h1>
    <Condicional/>
    <Evento numero="1"/>
    <Evento numero="2"/>
    <Evento numero="3"/>
    <Form/>
    
    
    

     
      
      
    </div>
    
      
         
    
  )
}

export default App;
