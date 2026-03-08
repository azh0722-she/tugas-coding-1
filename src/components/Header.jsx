import WhatAppImage from '../assets/WhatsApp Image 2026-02-27 at 15.42.29.jpeg'

import { PiInstagramLogoFill } from "react-icons/pi";
import { PiTiktokLogoFill } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import '../styles/Header.css'
function Header() {
  return (
    <>
      <header>
        <div className="header-jumbotron">
          <img src={WhatAppImage} alt="Profile Picture" />
          <h3>Azzah Alya</h3>
          <p>Student in MAN 1 MODEL Banda Aceh</p>
          <div className='socialMedia'>
            <a href=''><PiInstagramLogoFill /></a>
            <a href=''><PiTiktokLogoFill /></a>          
            <a href=''><PiTelegramLogoDuotone /></a>
            <a href=''><PiTwitterLogoLight /></a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header