
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Empresa from './Components/pages/Empresa';
import Contato from './Components/pages/Contato';
import Navbar from './Components/Navbar';
import Footer from './Components/layout/Footer';




function App() {
  return (
    <Router>

      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/empresa" element={<Empresa />} />
      </Routes>
          
       <Footer/>
    </Router>
    
  )
}

export default App;
