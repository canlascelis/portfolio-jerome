import Navbar from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';

//views
import Home from './views/home/Home';
import About from './views/about/About';
import Projects from './views/recentProjects/Projects';
import Contact from './views/contact/Contact';
import Missing from './views/missingPage/Missing';
import './app.scss';
import { useState } from 'react';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => { setDarkMode(!isDarkMode) }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path='/home' element={<Home isDarkMode={isDarkMode} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Missing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
