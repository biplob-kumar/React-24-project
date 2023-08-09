import React from 'react'
import {  Link} from "react-router-dom";
import  header from "./Header.css";

const Header = () => {
  return (
    <div className='header'>

     <div>
        <h1>
            <Link  to="/" className='logo' >  Modern Car Shop  </Link>
        </h1>
     </div>
     <div className='header-links'>
       <ul>
        <li>
            <Link to="/" > Home </Link>
        </li>
       </ul>
       <ul>
        <li>
            <Link to="/Singup" > SingUp </Link>
        </li>
       </ul>
       <ul>
        <li>
            <Link to="/cart"className='cart' > 
             <i class="fas fa-shopping-car">
         </i> </Link>
        </li>
       </ul>

     </div>
    </div>
  )
}

export default Header