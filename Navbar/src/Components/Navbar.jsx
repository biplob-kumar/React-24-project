import React, { useState } from 'react'
import navbar from "./Navbar.css";
import { FaFacebookSquare,FaInstagramSquare,FaWhatsappSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons]=useState(false);
  return (
    <div>
        <nav className='main-nav'>
            {/*  logo part  */}
            <div className="logo">
                <h2>
                    <span>B</span>IPLOB
                    <span>K</span>UMAR
                </h2>
            </div>
            {/*  2nd manu paert */}
              <div
                 className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                  }>
                       
                   <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">CONTACT</a></li>
                   </ul>
              </div>
              {/*  cosial link  */}

              <div className="social-media">
                 <ul className='social-media-desktop'>

                    <li><a href="#"><FaFacebookSquare className='facebook' /></a></li>
                    <li><a href="#"><FaInstagramSquare className='instagram'/></a></li>
                    <li><a href="#"><FaWhatsappSquare className='whatsup'/></a></li>

                 </ul>
              <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>

              </div>

              </div>
        </nav>
        {/*  nav section end  */}

        {/* hero sction start */}

          {/* <section className='hero-section'>
               <p>Welcome TO </p>
               <h1> My Website  </h1>
          </section> */}
    </div>
  )
}

export default Navbar