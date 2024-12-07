import './navigation.scss';
import Jicon from '../../../assets/icons/J-ICON.svg';
import JiconWhite from '../../../assets/icons/J-ICON-WHITE.svg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const isDarkMode = props.isDarkMode;
    const handleDarkMode = props.handleDarkMode;

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark dark-mode' : 'bg-light navbar-light'}`} role="navigation">
            <div className="container-fluid container">
                {/* Navbar brand */}
                <NavLink className="navbar-brand" to="/portfolio-jerome/home">
                    <img src={isDarkMode ? JiconWhite : Jicon} alt="logo" className="logo" height="56" />
                </NavLink>

                {/* Collapse Button */}
                <button className={`navbar-toggler ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse navbar-link" id="navbar-links">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/portfolio-jerome/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio-jerome/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio-jerome/projects' className="nav-link">Projects</NavLink>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon={ isDarkMode ? faSun : faMoon} className="dark-mode-btn btn btn-outline-dark" 
                    onClick={handleDarkMode} style={{color: `${isDarkMode ? '#FFF' : '' }`}} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar ;