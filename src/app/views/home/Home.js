import './home.scss';
import Threejs from '../../components/Threejs/Threejs';
import RecentProj1 from '../../../assets/images/calculator-jeres.png';
import RecentProj2 from '../../../assets/images/game-preview.png';
import Resume from '../../../assets/pdf/Jeremiah-Celis-Resume.pdf';
// import Rate from '../../components/Rate/Rate';
import ContactModal from '../../components/ContactModal/ContactModal';
import { Link } from "react-router-dom";

const Home = (props) => {
    const isDarkMode = props.isDarkMode;

    return (
        <section className='home'>
            <Threejs isDarkMode={isDarkMode}/>

            <div className='hire-wrapper container my-5'>
                <div className='hire-content'>
                    <h1 className='title'>Hire me</h1>
                    <p className='lead'>I would appreciate the chance to work with you in the future, I specialize in front-end development utilizing Javascript. </p>
                    <a href={Resume} className='btn btn-info btn-lg text-white' download>Download resume</a>
                </div>
            </div>

            <div className="recent-projects my-5 container">
                <div className="row d-flex justify-content-around">
                    <h1 className="title col-lg-10">Recent projects</h1>
                    <Link to="/portfolio-jerome/projects" className='btn btn-sm btn-warning col-lg-1'>View more</Link>
                
                    <div className="recent-img justify-content-around row">
                        <img src={RecentProj1} alt="Calculator" className="col-lg-6" />
                        <img src={RecentProj2} alt="Game-prev" className="col-lg-6 2D Game Preview" />
                    </div>
                </div>
            </div>

            {/* /*<Rate/>*/}
            <ContactModal />

        </section>
    );
}

export default Home;