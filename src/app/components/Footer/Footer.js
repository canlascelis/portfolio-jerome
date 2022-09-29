import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className='row align-items-center container'>
                <div className='line-wrapper my-4 col-12'><p className='line'></p></div>
                <div className='col'>
                    <h6>Jeremiah Celis</h6>
                </div>

                <div className='col'>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/jeremiah-celis-50382b221/">
                        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/canlascelis">
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/celisjers/?hl=en">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;