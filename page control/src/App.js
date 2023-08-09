
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Cpmponents/page/Home';
import About from './Cpmponents/page/About';
import Contact from './Cpmponents/page/Contact';
import Error from "./Error";


function App() {
  return <BrowserRouter>
  
 <Routes>
    <Route path='/' element={ <Home/>} >
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={ <Contact/>} />
    <Route path='*' element={ <Error/>} />
    </Route>
 </Routes>

  </BrowserRouter>


}

export default App;
