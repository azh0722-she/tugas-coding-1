import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Portofolio from "../components/Portofolio"
import About from "../components/About"
import Footer from "../components/Footer"
import Contact  from "../components/Contact"
function home() {
  return (
    <>
       <Navbar />
       <Header />
       <Portofolio />
       <About />
       <Contact />
       <Footer />  
    </>
  )
}

export default home