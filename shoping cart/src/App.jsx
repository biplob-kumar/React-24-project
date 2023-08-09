import { useState } from 'react'

import './App.css'
import Data from './Components/back/Data/Data'
import Header from './Components/Front/Header/Header';
import  Routes  from "./Components/Front/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const {productItems} = Data;

  return (
    <div className="App">
  
    <Router>
       <Header/>
       <Routes productItems={productItems} />
    </Router>
    </div>
  )
}

export default App
