import React from 'react'
import {  } from "./LogoSearch.css";



const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <i class="fa-solid fa-b logo" ></i>
      <div className="search">
        <input type="text"  placeholder='#Explore'/>
        <div className="s-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch