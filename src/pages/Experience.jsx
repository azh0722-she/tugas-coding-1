import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiNextjsLine } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

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