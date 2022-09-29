import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faVuejs, faSass, faBootstrap, faGit, faFigma } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const timeline = [
        {
            id: 1,
            year: '2012 - 2016',
            description: 'High School - Nuestra Señora Del Pilar Integrated School',
            experience: null,
            position: null
        }, {
            id: 2,
            year: '2018',
            description: 'Started my college at the University of the Assumption',
            experience: null,
            position: null
        }, {
            id: 3,
            year: '2021',
            description: 'I became an Freelance Graphic Designer',
            experience: 'I designed some Letterheads, ID, and Mockup Designs',
            position: null
        }, {
            id: 4,
            year: '2022',
            description: 'Interned at TwistResources as Agile Software Engineer and Graduated at UA',
            experience: 'Assisted in developing and developed some features of the website with the team',
            position: null
        }
    ]
    /* 
    TODO: create an algo like this // DONE
    2012 - left
    2013 - right
    2014 - left
    2020 - right
    2021 - left
    2022 - right
    */

    const assignPositionTimeline = () => {
        for (let i = 0; i < timeline.length; i++) {
            if (i === 0) timeline[i].position = 'left'
            else if (i % 2 === 0) timeline[i].position = 'left'
            else timeline[i].position = 'right'
        }
    }


    const createTimeline = timeline.map((item, i) => {
        assignPositionTimeline()
        return (
            <div className={`container ${item.position}`} key={i}>
                <div className="content">
                    <h2>{item.year}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        )
    })

    return (
        <section className="container about-section">
            <div className="row justify-content-around">
                <div className="col-lg-4 sticky-content">
                    <h1 className="title my-5">About</h1>
                    <h4>Know me</h4>
                    <p>Hello! My area of expertise is front-end development, specializing towards Javascript development. </p>
                    <h4>Connect with me</h4>
                    <p>Email me or contact me <a href="mailto:canlascelisgmail.comt" className="link">here</a></p>
                </div>

                <div className="col-lg-8 main-content my-5 p-4">
                    <h4>Background</h4>
                    <p>Hello my name is Jeremiah Canlas Celis from City of San Fernando Pampanga. In the year 2022, I graduated from the University of the Assumption in San Fernando, Pampanga, with a bachelor's degree in information technology. </p>
                    <p>My career to technology did not begin in the typical manner. In fact, as a child, I had no desire to become a software engineer. However, the significance of technology hit me right in the face when I realized softwares are cool and it can help people in some way.</p>
                    <h4>Social platforms</h4>
                    <ul className='social-list '>
                        <li><a href="https://www.facebook.com/Jerscls/">Facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/jeremiah-celis-50382b221/">Linkedin</a></li>
                        <li><a href="https://www.instagram.com/celisjers/?hl=en">Instagram</a></li>
                    </ul>
                    <h4>Technology Stack</h4>
                    <div className="row justify-content-around my-4">
                        <FontAwesomeIcon icon={faReact} className="logos col-lg-1" />
                        <FontAwesomeIcon icon={faVuejs} className="logos col-lg-1" />
                        <FontAwesomeIcon icon={faBootstrap} className="logos col-lg-1" />
                        <FontAwesomeIcon icon={faSass} className="logos col-lg-1" />
                        <FontAwesomeIcon icon={faGit} className="logos col-lg-1" />
                        <FontAwesomeIcon icon={faFigma} className="logos col-lg-1" />
                    </div>
                </div>
            </div>

            <div className="row justify-content-between">
                <h1 className="title my-5 col-lg-4 sticky-content">Experience</h1>

                <div className="col-lg-8 my-5 p-3 timeline">
                    {createTimeline}
                </div>
            </div>
        </section>
    );
}

export default About;