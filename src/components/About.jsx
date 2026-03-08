import '../styles/About.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileJsx } from "react-icons/pi";
import { RiReactjsFill } from "react-icons/ri";
function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>This is the about selection our website.</p>
            <p>This website is a learning project in web development.
            This project was created to hone my skills in combining HTML, CSS, 
            and JavaScript to create responsive, engaging, and interactive websites. 
            Through this website, I learned about code structure, interface design, and
              basic programming logic in web development.</p>
              <h4>Progamming Language & Tools</h4>
              <div className='skills'>
                <AiOutlineHtml5 />
                <FaCss3 />
                <IoLogoJavascript />
                <PiFileJsx />
                <RiReactjsFill />
              </div>
        </div>
    </section>
  )
}

export default About