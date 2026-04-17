import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiNextjsLine } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const IconSection = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Ikon dengan efek mengambang (Floating) */}
      <motion.div
        animate={{ y: [50, 10, 50] }} // Bergerak naik turun
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <i className="fa fa-react" style={{ fontSize: '40px', color: '#61DBFB' }}></i>
      </motion.div>

      {/* Ikon dengan efek Scale saat di-Hover */}
      <motion.div
        whileHover={{ scale: 1.3, rotate: 15 }} // Membesar & miring saat kursor di atasnya
        whileTap={{ scale: 0.9 }} // Mengecil sedikit saat diklik
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-github" style={{ fontSize: '40px' }}></i>
      </motion.div>
    </div>
  );
};

function Experience() {
    return (
    <>
    <Navbar />
    
        <div className="wrapper">
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2026 - present"
                    iconStyle={{ background: '#FFFAF0', color: '#52E5E7' }}
                    icon= {<RiNextjsLine />}>
                    <h3 className="vertical-timeline-element-title">Front End Engineertor</h3>
                    <h4 className="vertical-timeline-element-subtitle">azzahalya</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2026 - present"
                    iconStyle={{ background: '#FFFAF0', color: '#52E5E7' }}
                    icon= {<RiReactjsFill  />}>
                    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">azzahalya</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2026 - present"
                    iconStyle={{ background: '#FFFAF0', color: '#52E5E7' }}
                    icon={<FaLaravel />}>
                    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">azzahalya</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
            

        </div>
        <Footer />
        <ScrollToTop />
    </>
    )
}


export default Experience