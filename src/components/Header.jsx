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
        <div className="header-jumbotron" data-aos="fade-up"
          data-aos-duration="3000">
          <img className='imgages' src={WhatAppImage} alt="Profile Picture" />
          <h3>Azzah Alya</h3>
          <p>Student in MAN 1 MODEL Banda Aceh</p>
          <div className='socialMedia'>
            <a href='https://www.instagram.com/azh_alya?igsh=MTBsOTVya3BwcnA1bg=='><PiInstagramLogoFill /></a>
            <a href='https://www.tiktok.com/@alya_aya22?_r=1&_t=ZS-94Y6ASmJXk1'><PiTiktokLogoFill /></a>          
            <a href=''><PiTelegramLogoDuotone /></a>
            <a href=''><PiTwitterLogoLight /></a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header