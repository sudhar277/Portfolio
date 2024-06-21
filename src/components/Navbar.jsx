import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './navbar.css';

function Navbar() {
  const [currentComp, setCurrentComp] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);
  const handleNavClose = () => setIsNavOpen(false);

  const handleHome = () => {
    setCurrentComp('Home');
    handleNavClose();
  };

  const handleAbout = () => {
    setCurrentComp('About');
    handleNavClose();
  };

  const handleProjects = () => {
    setCurrentComp('Projects');
    handleNavClose();
  };

  const handleSkills = () => {
    setCurrentComp('Skills');
    handleNavClose();
  };



  let Comp;
  switch (currentComp) {
    case 'Home':
      Comp = Home;
      break;
    case 'About':
      Comp = About;
      break;
    case 'Projects':
      Comp = Projects;
      break;
    case 'Skills':
      Comp = Skills;
      break;
    default:
      Comp = Home;
  }

  return (
    <>
      <div className="navbar">
        <p className="name">Sudharshan Baskar</p>
        <div className={`nav-elements ${isNavOpen ? 'open' : ''}`}>
          <button onClick={handleHome}>Home</button>
          <button onClick={handleAbout}>About Me</button>
          <button onClick={handleProjects}>Projects</button>
          <button onClick={handleSkills}>Skills</button>
        </div>
        <div className="hamburger" onClick={handleNavToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="content">
        <Comp />
      </div>
    </>
  );
}

export default Navbar;
