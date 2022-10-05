import React from 'react';
import './header.css';
import CTA from './CTA';
import Suli from './../../assets/Suli-removebg-preview.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
      <div className='frosted-bg'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Suleiman (Suli)</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="suli">
            <img src={Suli} alt="" className="suli__img" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </div>
   </header>
  )
}

export default Header