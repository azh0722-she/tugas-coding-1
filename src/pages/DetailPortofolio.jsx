import { useParams,Navigate} from "react-router-dom"
import '../styles/DetailPortofolio.css'
import { Portofoliolist} from '../Data/DataPortofolio'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop" 
function DetailPortofolio() {
  const { id } = useParams();
  const Data = Portofoliolist.find( (item) => item.id === id);
  if (Data == undefined){
    return <Navigate to='/Page-Not-Found'/>
  }
  return (
    <>
      <Navbar/>
      <section id="detail-portfolio">
        <div className="wrapper">
          <h1>{Data.title}</h1>
          <img src={Data.image}/>
          <p className="skill"><b>skills:</b> {Data.skill}</p>
        </div>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default DetailPortofolio