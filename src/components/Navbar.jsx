import { useState } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './navbar.css';

function Navbar() {
    const [currentComp, setCurrentcomp] = useState('Home');

    const handleHome = () => setCurrentcomp('Home');
    const handleAbout = () => setCurrentcomp('About');
    const handleProjects = () => setCurrentcomp('Projects');
    const handleSkills = () => setCurrentcomp('Skills');
    const handleContact = () => setCurrentcomp('Contact');

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
        case 'Contact':
            Comp = Contact;
            break;
        default:
            Comp = Home;
    }

    return (
        <>
            <div className='navbar'>
                <p className='name'>Sudharshan Baskar</p>
                <div className='nav-elements'>
                    <button onClick={handleHome}>Home</button>
                    <button onClick={handleAbout}>About Me</button>
                    <button onClick={handleProjects}>Projects</button>
                    <button onClick={handleSkills}>Skills</button>
                    <button onClick={handleContact}>Contact</button>
                </div>
            </div>
            <div className='content'>
                <Comp />
            </div>
        </>
    );
}

export default Navbar;
