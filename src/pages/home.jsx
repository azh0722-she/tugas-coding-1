import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Portofolio from "../components/Portofolio"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact  from "../components/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import Accordion from "../components/Accordion"

function home() {
  return (
    <>
       <Navbar />
       <Header />
       <Portofolio />
       <About />
       <Contact />
       <Accordion />
       <Footer />  
    </>
  )
}

export default home